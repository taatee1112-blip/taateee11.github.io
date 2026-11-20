# WMS PRO - Local HTTP Server (Native PowerShell)
$port = 8080
$path = $PSScriptRoot

# Find available port if 8080 is busy
while ($true) {
    $test = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
    if (-not $test) { break }
    $port++
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "========================================================" -ForegroundColor Green
    Write-Host "  ระบบจัดการคลังสินค้า WMS PRO เริ่มทำงานแล้ว!" -ForegroundColor Cyan
    Write-Host "  URL: http://localhost:$port/" -ForegroundColor Yellow
    Write-Host "  (กด Ctrl + C ในหน้าต่างนี้เมื่อต้องการปิดเซิร์ฟเวอร์)" -ForegroundColor Gray
    Write-Host "========================================================" -ForegroundColor Green

    Start-Process "http://localhost:$port/"

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($urlPath)) { 
            $urlPath = "index.html" 
        }

        $filePath = Join-Path $path $urlPath
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".svg"  { "image/svg+xml" }
                ".ico"  { "image/x-icon" }
                Default { "application/octet-stream" }
            }
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $err = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($err, 0, $err.Length)
        }
        $response.Close()
    }
}
catch {
    Write-Host "เกิดข้อผิดพลาด: $_" -ForegroundColor Red
}
finally {
    $listener.Stop()
}
