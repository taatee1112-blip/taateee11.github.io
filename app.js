// GROCERY PRO - Grocery Store & Retail Stock Management Engine
// Data Persistence Key
const STORAGE_KEY_PRODUCTS = 'grocery_wms_products_v1';
const STORAGE_KEY_LOGS = 'grocery_wms_logs_v1';

// Initial Demo Dataset: สินค้าอุปโภคบริโภคทั่วไปในร้านขายของชำ / โชห่วย
const SAMPLE_PRODUCTS = [
    {
        id: 'p-1',
        sku: 'GRO-001',
        barcode: '8850702000018',
        name: 'มาม่า บะหมี่กึ่งสำเร็จรูปรสต้มยำกุ้ง (กล่อง 30 ซอง)',
        category: 'อาหารแห้ง & บะหมี่',
        location: 'เชลฟ์ A1 (หน้าร้าน)',
        unit: 'กล่อง',
        costPrice: 185,
        sellPrice: 210,
        stock: 24,
        minStock: 8,
        createdAt: new Date().toISOString()
    },
    {
        id: 'p-2',
        sku: 'GRO-002',
        barcode: '8850125000109',
        name: 'ปลากระป๋องสามแม่ครัว 155 กรัม (แพ็ก 10 กระป๋อง)',
        category: 'อาหารสำเร็จรูป & กระป๋อง',
        location: 'เชลฟ์ A2 (หน้าร้าน)',
        unit: 'แพ็ก',
        costPrice: 165,
        sellPrice: 190,
        stock: 4,
        minStock: 8, // Low Stock!
        createdAt: new Date().toISOString()
    },
    {
        id: 'p-3',
        sku: 'GRO-003',
        barcode: '8850999001015',
        name: 'น้ำดื่มสิงห์ 600 มล. (แพ็ก 12 ขวด)',
        category: 'เครื่องดื่ม & น้ำดื่ม',
        location: 'สต็อกหลังร้าน / แช่เย็น',
        unit: 'แพ็ก',
        costPrice: 48,
        sellPrice: 60,
        stock: 45,
        minStock: 15,
        createdAt: new Date().toISOString()
    },
    {
        id: 'p-4',
        sku: 'GRO-004',
        barcode: '8851959132014',
        name: 'โค้ก ออริจินัล 325 มล. (ถาด 24 กระป๋อง)',
        category: 'เครื่องดื่ม & น้ำดื่ม',
        location: 'ตู้แช่หน้าร้าน',
        unit: 'ถาด',
        costPrice: 310,
        sellPrice: 360,
        stock: 0, // Out of Stock!
        minStock: 5,
        createdAt: new Date().toISOString()
    },
    {
        id: 'p-5',
        sku: 'GRO-005',
        barcode: '8850241000122',
        name: 'น้ำมันพืชตรามรกต ปาล์ม 1 ลิตร (ลัง 12 ขวด)',
        category: 'เครื่องปรุง & ของใช้ในครัว',
        location: 'เชลฟ์ B1 (เครื่องปรุง)',
        unit: 'ลัง',
        costPrice: 540,
        sellPrice: 600,
        stock: 15,
        minStock: 5,
        createdAt: new Date().toISOString()
    },
    {
        id: 'p-6',
        sku: 'GRO-006',
        barcode: '8850029000021',
        name: 'น้ำปลาทิพรส 700 มล. (ขวดแก้ว)',
        category: 'เครื่องปรุง & ของใช้ในครัว',
        location: 'เชลฟ์ B2 (เครื่องปรุง)',
        unit: 'ขวด',
        costPrice: 28,
        sellPrice: 34,
        stock: 38,
        minStock: 12,
        createdAt: new Date().toISOString()
    },
    {
        id: 'p-7',
        sku: 'GRO-007',
        barcode: '8850250000030',
        name: 'น้ำตาลทรายขาวบริสุทธิ์ มิตรผล 1 กก.',
        category: 'เครื่องปรุง & ของใช้ในครัว',
        location: 'เชลฟ์ B2 (เครื่องปรุง)',
        unit: 'ถุง',
        costPrice: 23,
        sellPrice: 28,
        stock: 50,
        minStock: 15,
        createdAt: new Date().toISOString()
    },
    {
        id: 'p-8',
        sku: 'GRO-008',
        barcode: '8851932001017',
        name: 'น้ำยาล้างจาน ซันไลต์ เลมอนเทอร์โบ 750 มล. (ถุงเติม)',
        category: 'ของใช้ในบ้าน & ทำความสะอาด',
        location: 'เชลฟ์ C1 (ของใช้ในบ้าน)',
        unit: 'ถุง',
        costPrice: 29,
        sellPrice: 36,
        stock: 5,
        minStock: 10, // Low stock!
        createdAt: new Date().toISOString()
    },
    {
        id: 'p-9',
        sku: 'GRO-009',
        barcode: '8851932110023',
        name: 'ผงซักฟอก บรีสเอกเซล 800 กรัม',
        category: 'ของใช้ในบ้าน & ทำความสะอาด',
        location: 'เชลฟ์ C2 (ของใช้ในบ้าน)',
        unit: 'ถุง',
        costPrice: 68,
        sellPrice: 82,
        stock: 20,
        minStock: 8,
        createdAt: new Date().toISOString()
    },
    {
        id: 'p-10',
        sku: 'GRO-010',
        barcode: '8850555000055',
        name: 'ข้าวสารหอมมะลิ 100% ตราฉัตร 5 กก.',
        category: 'ข้าวสาร & ธัญพืช',
        location: 'สต็อกหลังร้าน (ลานวาง)',
        unit: 'ถุง',
        costPrice: 195,
        sellPrice: 235,
        stock: 18,
        minStock: 6,
        createdAt: new Date().toISOString()
    },
    {
        id: 'p-11',
        sku: 'GRO-011',
        barcode: '8850718000101',
        name: 'ขนมมันฝรั่ง เลย์ คลาสสิค 42 กรัม (แพ็ก 6 ซอง)',
        category: 'ขนมขบเคี้ยว & ของทานเล่น',
        location: 'เชลฟ์ขนมหน้าร้าน',
        unit: 'แพ็ก',
        costPrice: 98,
        sellPrice: 120,
        stock: 16,
        minStock: 5,
        createdAt: new Date().toISOString()
    },
    {
        id: 'p-12',
        sku: 'GRO-012',
        barcode: '8850002010047',
        name: 'สบู่ก้อน โพรเทคส์ ไอซ์ซี่คูล 65 กรัม (แพ็ก 4 ก้อน)',
        category: 'ของใช้ส่วนตัว & สุขอนามัย',
        location: 'เชลฟ์ C3 (ของใช้ส่วนตัว)',
        unit: 'แพ็ก',
        costPrice: 45,
        sellPrice: 58,
        stock: 12,
        minStock: 6,
        createdAt: new Date().toISOString()
    }
];

const SAMPLE_LOGS = [
    {
        id: 'log-1',
        type: 'IN',
        productId: 'p-1',
        sku: 'GRO-001',
        productName: 'มาม่า บะหมี่กึ่งสำเร็จรูปรสต้มยำกุ้ง (กล่อง 30 ซอง)',
        qty: 20,
        beforeQty: 4,
        afterQty: 24,
        refNumber: 'บิลยี่ปั๊ว-088',
        operator: 'เจ้าของร้าน',
        note: 'สั่งของรอบสัปดาห์จากยี่ปั๊วใหญ่',
        timestamp: new Date(Date.now() - 86400000 * 2).toISOString()
    },
    {
        id: 'log-2',
        type: 'IN',
        productId: 'p-3',
        sku: 'GRO-003',
        productName: 'น้ำดื่มสิงห์ 600 มล. (แพ็ก 12 ขวด)',
        qty: 30,
        beforeQty: 15,
        afterQty: 45,
        refNumber: 'SINGHA-441',
        operator: 'พี่นิด หน้าร้าน',
        note: 'รถส่งน้ำสิงห์มาส่งประจำสัปดาห์',
        timestamp: new Date(Date.now() - 86400000 * 1).toISOString()
    },
    {
        id: 'log-3',
        type: 'OUT',
        productId: 'p-3',
        sku: 'GRO-003',
        productName: 'น้ำดื่มสิงห์ 600 มล. (แพ็ก 12 ขวด)',
        qty: 10,
        beforeQty: 55,
        afterQty: 45,
        refNumber: 'เติมตู้แช่',
        operator: 'พี่นิด หน้าร้าน',
        note: '[เบิกเติมเชลฟ์หน้าร้าน] ยกเข้าตู้เย็นแช่เครื่องดื่มหน้าร้าน',
        timestamp: new Date(Date.now() - 86400000 * 1).toISOString()
    },
    {
        id: 'log-4',
        type: 'OUT',
        productId: 'p-5',
        sku: 'GRO-005',
        productName: 'น้ำมันพืชตรามรกต ปาล์ม 1 ลิตร (ลัง 12 ขวด)',
        qty: 3,
        beforeQty: 18,
        afterQty: 15,
        refNumber: 'บิลเงินสด-012',
        operator: 'เจ้าของร้าน',
        note: '[ขายเหมา/ร้านอาหาร] ลูกค้าร้านอาหารตามสั่งซื้อเหมา 3 ลัง',
        timestamp: new Date().toISOString()
    },
    {
        id: 'log-5',
        type: 'OUT',
        productId: 'p-4',
        sku: 'GRO-004',
        productName: 'โค้ก ออริจินัล 325 มล. (ถาด 24 กระป๋อง)',
        qty: 6,
        beforeQty: 6,
        afterQty: 0,
        refNumber: 'บิลเงินสด-025',
        operator: 'พี่นิด หน้าร้าน',
        note: '[ขายหน้าร้าน] ขายหมดสต็อกเกลี้ยง ต้องสั่งยี่ปั๊วด่วน',
        timestamp: new Date().toISOString()
    }
];

// App State
let products = [];
let logs = [];
let movementChartInstance = null;
let categoryChartInstance = null;
let html5QrScannerInstance = null;

// Initialize System on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    loadStorageData();
    startClock();
    renderAll();
    setupEventListeners();
    refreshIcons();
}

// Storage Helpers
function loadStorageData() {
    try {
        const storedProducts = localStorage.getItem(STORAGE_KEY_PRODUCTS);
        const storedLogs = localStorage.getItem(STORAGE_KEY_LOGS);

        if (storedProducts) {
            products = JSON.parse(storedProducts);
        } else {
            products = [...SAMPLE_PRODUCTS];
            saveProducts();
        }

        if (storedLogs) {
            logs = JSON.parse(storedLogs);
        } else {
            logs = [...SAMPLE_LOGS];
            saveLogs();
        }
    } catch (e) {
        console.error('Storage loading error:', e);
        products = [...SAMPLE_PRODUCTS];
        logs = [...SAMPLE_LOGS];
    }
}

function saveProducts() {
    localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(products));
}

function saveLogs() {
    localStorage.setItem(STORAGE_KEY_LOGS, JSON.stringify(logs));
}

// Global Refresh
function renderAll() {
    updateDashboardStats();
    renderLowStockTable();
    renderCharts();
    renderInventoryTable();
    renderTransactionsTable();
    populateCategoryDropdowns();
    populateProductSelectDropdowns();
    refreshIcons();
}

function refreshIcons() {
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Live Clock
function startClock() {
    const clockEl = document.getElementById('currentDateTime');
    function update() {
        const now = new Date();
        const options = { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
        };
        if (clockEl) {
            clockEl.textContent = now.toLocaleDateString('th-TH', options);
        }
    }
    update();
    setInterval(update, 1000);
}

// ==========================================
// NAVIGATION TABS
// ==========================================
function switchTab(tabId) {
    const tabs = ['dashboard', 'inventory', 'transactions', 'settings'];
    tabs.forEach(t => {
        const tabContent = document.getElementById(`tab-${t}`);
        const tabBtn = document.getElementById(`tabBtn-${t}`);
        if (tabContent && tabBtn) {
            if (t === tabId) {
                tabContent.classList.remove('hidden');
                tabBtn.classList.add('text-blue-600', 'bg-blue-50', 'active');
                tabBtn.classList.remove('text-slate-600', 'hover:bg-slate-100');
            } else {
                tabContent.classList.add('hidden');
                tabBtn.classList.remove('text-blue-600', 'bg-blue-50', 'active');
                tabBtn.classList.add('text-slate-600', 'hover:bg-slate-100');
            }
        }
    });

    if (tabId === 'dashboard') {
        renderCharts();
    } else if (tabId === 'inventory') {
        renderInventoryTable();
    } else if (tabId === 'transactions') {
        renderTransactionsTable();
    }
    refreshIcons();
}

// ==========================================
// DASHBOARD & CHARTS
// ==========================================
function updateDashboardStats() {
    const totalSKUs = products.length;
    const totalQty = products.reduce((sum, p) => sum + (Number(p.stock) || 0), 0);
    const totalValue = products.reduce((sum, p) => sum + ((Number(p.stock) || 0) * (Number(p.costPrice) || 0)), 0);

    const outOfStockList = products.filter(p => p.stock <= 0);
    const lowStockList = products.filter(p => p.stock > 0 && p.stock <= p.minStock);
    const urgentCount = outOfStockList.length + lowStockList.length;

    // Set DOM elements
    document.getElementById('statTotalSKUs').textContent = totalSKUs.toLocaleString();
    document.getElementById('statTotalStockQty').textContent = totalQty.toLocaleString();
    document.getElementById('statTotalValue').textContent = `฿${totalValue.toLocaleString('th-TH', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    document.getElementById('statLowStockCount').textContent = urgentCount.toLocaleString();
    document.getElementById('statOutOfStockSub').textContent = `(หมดสต็อก ${outOfStockList.length})`;
    document.getElementById('badgeTotalItems').textContent = totalSKUs;
}

function renderLowStockTable() {
    const tbody = document.getElementById('lowStockTableBody');
    if (!tbody) return;

    const urgentItems = products.filter(p => p.stock <= p.minStock);

    if (urgentItems.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" class="text-center py-6 text-slate-400 text-sm">
                    <div class="flex items-center justify-center space-x-2">
                        <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-500"></i>
                        <span>ยอดเยี่ยม! ขณะนี้ไม่มีสินค้ารายการใดต่ำกว่าจุดเตือนสต็อก</span>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = urgentItems.map(p => {
        const isOut = p.stock <= 0;
        const statusBadge = isOut 
            ? `<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-700">สินค้าหมด (0)</span>`
            : `<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">ใกล้หมด</span>`;

        return `
            <tr class="hover:bg-slate-50 transition">
                <td class="px-4 py-3 font-mono font-medium text-slate-700 text-xs">${escapeHtml(p.sku)}</td>
                <td class="px-4 py-3 font-medium text-slate-800">${escapeHtml(p.name)}</td>
                <td class="px-4 py-3 text-slate-500 text-xs">${escapeHtml(p.category)}</td>
                <td class="px-4 py-3 text-slate-500 text-xs">${escapeHtml(p.location || '-')}</td>
                <td class="px-4 py-3 text-right font-bold ${isOut ? 'text-rose-600' : 'text-amber-600'}">${p.stock.toLocaleString()} ${escapeHtml(p.unit || 'ชิ้น')}</td>
                <td class="px-4 py-3 text-right text-slate-400 text-xs">${p.minStock.toLocaleString()} ${escapeHtml(p.unit || 'ชิ้น')}</td>
                <td class="px-4 py-3 text-center">${statusBadge}</td>
                <td class="px-4 py-3 text-center">
                    <button onclick="quickStockIn('${p.id}')" class="px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-md text-xs font-medium transition inline-flex items-center space-x-1">
                        <i data-lucide="arrow-down-left" class="w-3.5 h-3.5"></i>
                        <span>สั่งรับเข้า</span>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function renderCharts() {
    renderMovementChart();
    renderCategoryChart();
}

function renderMovementChart() {
    const ctx = document.getElementById('movementChart');
    if (!ctx) return;

    // Calculate last 7 days movement
    const days = [];
    const inData = [];
    const outData = [];

    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().slice(0, 10);
        const dayLabel = d.toLocaleDateString('th-TH', { weekday: 'short', day: 'numeric', month: 'short' });
        days.push(dayLabel);

        const dayLogs = logs.filter(l => l.timestamp.slice(0, 10) === dateStr);
        const dayIn = dayLogs.filter(l => l.type === 'IN').reduce((sum, l) => sum + (Number(l.qty) || 0), 0);
        const dayOut = dayLogs.filter(l => l.type === 'OUT').reduce((sum, l) => sum + (Number(l.qty) || 0), 0);

        inData.push(dayIn);
        outData.push(dayOut);
    }

    if (movementChartInstance) {
        movementChartInstance.destroy();
    }

    movementChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: days,
            datasets: [
                {
                    label: 'รับเข้า (ชิ้น)',
                    data: inData,
                    backgroundColor: '#10b981',
                    borderRadius: 4
                },
                {
                    label: 'เบิกออก (ชิ้น)',
                    data: outData,
                    backgroundColor: '#f59e0b',
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { precision: 0 }
                }
            }
        }
    });
}

function renderCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;

    const catMap = {};
    products.forEach(p => {
        const cat = p.category || 'อื่นๆ';
        catMap[cat] = (catMap[cat] || 0) + 1;
    });

    const labels = Object.keys(catMap);
    const data = Object.values(catMap);

    const colors = [
        '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', 
        '#ec4899', '#06b6d4', '#64748b'
    ];

    if (categoryChartInstance) {
        categoryChartInstance.destroy();
    }

    categoryChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors.slice(0, labels.length)
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { boxWidth: 12, font: { size: 11 } }
                }
            }
        }
    });
}

// ==========================================
// INVENTORY & PRODUCT MANAGEMENT
// ==========================================
function renderInventoryTable() {
    const tbody = document.getElementById('inventoryTableBody');
    const emptyState = document.getElementById('inventoryEmptyState');
    const countDisplay = document.getElementById('itemCountDisplay');
    if (!tbody) return;

    const query = (document.getElementById('searchInput')?.value || '').trim().toLowerCase();
    const catFilter = document.getElementById('categoryFilter')?.value || 'ALL';
    const statusFilter = document.getElementById('statusFilter')?.value || 'ALL';

    const filtered = products.filter(p => {
        const matchQuery = !query || 
            p.name.toLowerCase().includes(query) ||
            p.sku.toLowerCase().includes(query) ||
            (p.barcode && p.barcode.toLowerCase().includes(query)) ||
            (p.location && p.location.toLowerCase().includes(query));

        const matchCat = catFilter === 'ALL' || p.category === catFilter;

        let matchStatus = true;
        if (statusFilter === 'NORMAL') matchStatus = p.stock > p.minStock;
        else if (statusFilter === 'LOW') matchStatus = p.stock > 0 && p.stock <= p.minStock;
        else if (statusFilter === 'OUT') matchStatus = p.stock <= 0;

        return matchQuery && matchCat && matchStatus;
    });

    if (countDisplay) countDisplay.textContent = filtered.length;

    if (filtered.length === 0) {
        tbody.innerHTML = '';
        emptyState?.classList.remove('hidden');
        return;
    }

    emptyState?.classList.add('hidden');

    tbody.innerHTML = filtered.map(p => {
        let statusBadge = '';
        if (p.stock <= 0) {
            statusBadge = `<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-700">หมดสต็อก</span>`;
        } else if (p.stock <= p.minStock) {
            statusBadge = `<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">ใกล้หมด</span>`;
        } else {
            statusBadge = `<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">พร้อมจำหน่าย</span>`;
        }

        const margin = (p.sellPrice && p.costPrice) ? (p.sellPrice - p.costPrice) : 0;

        return `
            <tr class="hover:bg-slate-50 transition border-b border-slate-100">
                <td class="px-4 py-3.5">
                    <div class="font-mono font-semibold text-slate-800 text-xs">${escapeHtml(p.sku)}</div>
                    ${p.barcode ? `<div class="text-[11px] text-slate-400 font-mono">${escapeHtml(p.barcode)}</div>` : ''}
                </td>
                <td class="px-4 py-3.5">
                    <div class="font-medium text-slate-800 text-sm">${escapeHtml(p.name)}</div>
                </td>
                <td class="px-4 py-3.5">
                    <span class="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium">${escapeHtml(p.category)}</span>
                </td>
                <td class="px-4 py-3.5 text-xs text-slate-600 font-medium">
                    <div class="flex items-center space-x-1">
                        <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i>
                        <span>${escapeHtml(p.location || 'ไม่ได้ระบุ')}</span>
                    </div>
                </td>
                <td class="px-4 py-3.5 text-right text-xs">
                    <div class="text-slate-700 font-medium">ทุน: ฿${p.costPrice.toLocaleString()}</div>
                    <div class="text-blue-600 font-semibold">ขาย: ฿${p.sellPrice.toLocaleString()}</div>
                </td>
                <td class="px-4 py-3.5 text-right">
                    <div class="font-bold text-base ${p.stock <= 0 ? 'text-rose-600' : p.stock <= p.minStock ? 'text-amber-600' : 'text-slate-800'}">
                        ${p.stock.toLocaleString()} <span class="text-xs font-normal text-slate-500">${escapeHtml(p.unit || 'ชิ้น')}</span>
                    </div>
                    <div class="text-[11px] text-slate-400">ขั้นต่ำ: ${p.minStock}</div>
                </td>
                <td class="px-4 py-3.5 text-center">
                    ${statusBadge}
                </td>
                <td class="px-4 py-3.5 text-center">
                    <div class="flex items-center justify-center space-x-1.5">
                        <button onclick="quickStockIn('${p.id}')" title="รับสินค้าเข้า" class="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition">
                            <i data-lucide="arrow-down-left" class="w-4 h-4"></i>
                        </button>
                        <button onclick="quickStockOut('${p.id}')" title="เบิกสินค้าออก" class="p-1.5 text-amber-600 hover:bg-amber-50 rounded-lg transition">
                            <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                        </button>
                        <button onclick="openEditProductModal('${p.id}')" title="แก้ไขข้อมูลสินค้า" class="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                            <i data-lucide="pencil" class="w-4 h-4"></i>
                        </button>
                        <button onclick="confirmDeleteProduct('${p.id}')" title="ลบสินค้า" class="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition">
                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    refreshIcons();
}

function filterByLowStock() {
    switchTab('inventory');
    const statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
        statusFilter.value = 'LOW';
        renderInventoryTable();
    }
}

// Populate Category & Datalist options
function populateCategoryDropdowns() {
    const cats = [...new Set(products.map(p => p.category).filter(Boolean))].sort();
    
    // Inventory filter dropdown
    const filterSelect = document.getElementById('categoryFilter');
    if (filterSelect) {
        const currentVal = filterSelect.value;
        filterSelect.innerHTML = `<option value="ALL">ทั้งหมดทุกหมวดหมู่</option>` + 
            cats.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
        if (cats.includes(currentVal)) {
            filterSelect.value = currentVal;
        }
    }

    // Modal Datalist
    const datalist = document.getElementById('categoryList');
    if (datalist) {
        datalist.innerHTML = cats.map(c => `<option value="${escapeHtml(c)}">`).join('');
    }
}

function populateProductSelectDropdowns() {
    const options = `<option value="">-- กรุณาเลือกสินค้า --</option>` + 
        products.map(p => `<option value="${p.id}">[${escapeHtml(p.sku)}] ${escapeHtml(p.name)} (คงเหลือ: ${p.stock} ${p.unit})</option>`).join('');

    const inSelect = document.getElementById('stockInProductSelect');
    const outSelect = document.getElementById('stockOutProductSelect');

    if (inSelect) inSelect.innerHTML = options;
    if (outSelect) outSelect.innerHTML = options;
}

// ==========================================
// ADD & EDIT PRODUCT MODAL
// ==========================================
function openAddProductModal() {
    document.getElementById('modalProductTitle').textContent = 'เพิ่มสินค้าใหม่ในคลัง';
    document.getElementById('prodEditId').value = '';
    document.getElementById('productForm').reset();
    document.getElementById('initialStockContainer').classList.remove('hidden');
    generateAutoSKU();
    openModal('modalProduct');
    refreshIcons();
}

function openEditProductModal(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    document.getElementById('modalProductTitle').textContent = `แก้ไขสินค้า: ${prod.sku}`;
    document.getElementById('prodEditId').value = prod.id;
    document.getElementById('prodSKU').value = prod.sku;
    document.getElementById('prodBarcode').value = prod.barcode || '';
    document.getElementById('prodName').value = prod.name;
    document.getElementById('prodCategory').value = prod.category;
    document.getElementById('prodUnit').value = prod.unit || 'ชิ้น';
    document.getElementById('prodLocation').value = prod.location || '';
    document.getElementById('prodCostPrice').value = prod.costPrice || 0;
    document.getElementById('prodSellPrice').value = prod.sellPrice || 0;
    document.getElementById('prodMinStock').value = prod.minStock;

    // Hide initial stock field when editing
    document.getElementById('initialStockContainer').classList.add('hidden');

    openModal('modalProduct');
    refreshIcons();
}

function generateAutoSKU() {
    const nextNum = products.length + 1;
    const padded = String(nextNum).padStart(3, '0');
    document.getElementById('prodSKU').value = `GRO-${padded}`;
}

function handleProductSubmit(e) {
    e.preventDefault();
    const editId = document.getElementById('prodEditId').value;
    const sku = document.getElementById('prodSKU').value.trim();
    const barcode = document.getElementById('prodBarcode').value.trim();
    const name = document.getElementById('prodName').value.trim();
    const category = document.getElementById('prodCategory').value.trim();
    const unit = document.getElementById('prodUnit').value.trim() || 'ชิ้น';
    const location = document.getElementById('prodLocation').value.trim();
    const costPrice = parseFloat(document.getElementById('prodCostPrice').value) || 0;
    const sellPrice = parseFloat(document.getElementById('prodSellPrice').value) || 0;
    const minStock = parseInt(document.getElementById('prodMinStock').value) || 5;

    // Check duplicate SKU
    const existingSku = products.find(p => p.sku.toLowerCase() === sku.toLowerCase() && p.id !== editId);
    if (existingSku) {
        showToast(`รหัส SKU "${sku}" นี้มีอยู่ในระบบแล้ว กรุณาใช้รหัสอื่น`, 'error');
        return;
    }

    if (editId) {
        // Edit existing
        const index = products.findIndex(p => p.id === editId);
        if (index !== -1) {
            products[index] = {
                ...products[index],
                sku, barcode, name, category, unit, location,
                costPrice, sellPrice, minStock
            };
            saveProducts();
            showToast(`อัปเดตข้อมูลสินค้า "${name}" เรียบร้อย`, 'success');
        }
    } else {
        // Add new
        const initialStock = parseInt(document.getElementById('prodInitialStock').value) || 0;
        const newProduct = {
            id: 'p-' + Date.now(),
            sku, barcode, name, category, unit, location,
            costPrice, sellPrice, stock: initialStock, minStock,
            createdAt: new Date().toISOString()
        };
        products.push(newProduct);
        saveProducts();

        // If initial stock > 0, log it
        if (initialStock > 0) {
            logs.unshift({
                id: 'log-' + Date.now(),
                type: 'IN',
                productId: newProduct.id,
                sku: newProduct.sku,
                productName: newProduct.name,
                qty: initialStock,
                beforeQty: 0,
                afterQty: initialStock,
                refNumber: 'INIT-STOCK',
                operator: 'ระบบ (สต็อกเริ่มต้น)',
                note: 'บันทึกสต็อกเริ่มต้นเมื่อสร้างสินค้า',
                timestamp: new Date().toISOString()
            });
            saveLogs();
        }

        showToast(`เพิ่มสินค้าใหม่ "${name}" สำเร็จ`, 'success');
    }

    closeModal('modalProduct');
    renderAll();
}

function confirmDeleteProduct(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    if (confirm(`คุณต้องการลบสินค้า "${prod.name}" (${prod.sku}) ออกจากระบบใช่หรือไม่?`)) {
        products = products.filter(p => p.id !== id);
        saveProducts();
        renderAll();
        showToast(`ลบสินค้า "${prod.name}" เรียบร้อยแล้ว`, 'info');
    }
}

// ==========================================
// STOCK IN (รับสินค้าเข้า)
// ==========================================
function openStockInModal(presetProductId = null) {
    populateProductSelectDropdowns();
    document.getElementById('stockInForm').reset();
    const select = document.getElementById('stockInProductSelect');
    
    if (presetProductId && select) {
        select.value = presetProductId;
        updateStockInProductDetails();
    } else {
        document.getElementById('stockInPreviewCard')?.classList.add('hidden');
    }

    openModal('modalStockIn');
    refreshIcons();
}

function quickStockIn(productId) {
    openStockInModal(productId);
}

function updateStockInProductDetails() {
    const select = document.getElementById('stockInProductSelect');
    const preview = document.getElementById('stockInPreviewCard');
    const prod = products.find(p => p.id === select.value);

    if (prod && preview) {
        preview.classList.remove('hidden');
        document.getElementById('stockInCurrentQty').textContent = `${prod.stock.toLocaleString()} ${prod.unit || 'ชิ้น'}`;
        document.getElementById('stockInLocation').textContent = prod.location || 'ไม่ได้ระบุ';
        document.getElementById('stockInCost').placeholder = `เดิม ฿${prod.costPrice.toLocaleString()}`;
    } else if (preview) {
        preview.classList.add('hidden');
    }
}

function handleStockInSubmit(e) {
    e.preventDefault();
    const productId = document.getElementById('stockInProductSelect').value;
    const qty = parseInt(document.getElementById('stockInQty').value);
    const newCost = parseFloat(document.getElementById('stockInCost').value);
    const ref = document.getElementById('stockInRef').value.trim() || 'PO-MANUAL';
    const operator = document.getElementById('stockInOperator').value.trim() || 'พนักงานคลัง';
    const note = document.getElementById('stockInNote').value.trim();

    const prod = products.find(p => p.id === productId);
    if (!prod || qty <= 0) return;

    const beforeQty = prod.stock;
    prod.stock += qty;
    if (!isNaN(newCost) && newCost > 0) {
        prod.costPrice = newCost; // update latest unit cost
    }
    saveProducts();

    // Add Log
    logs.unshift({
        id: 'log-' + Date.now(),
        type: 'IN',
        productId: prod.id,
        sku: prod.sku,
        productName: prod.name,
        qty: qty,
        beforeQty: beforeQty,
        afterQty: prod.stock,
        refNumber: ref,
        operator: operator,
        note: note,
        timestamp: new Date().toISOString()
    });
    saveLogs();

    closeModal('modalStockIn');
    renderAll();
    showToast(`รับสินค้าเข้า ${qty} ${prod.unit} สำเร็จ (คงเหลือ: ${prod.stock})`, 'success');
}

// ==========================================
// STOCK OUT (เบิกสินค้าออก)
// ==========================================
function openStockOutModal(presetProductId = null) {
    populateProductSelectDropdowns();
    document.getElementById('stockOutForm').reset();
    const select = document.getElementById('stockOutProductSelect');

    if (presetProductId && select) {
        select.value = presetProductId;
        updateStockOutProductDetails();
    } else {
        document.getElementById('stockOutPreviewCard')?.classList.add('hidden');
    }

    openModal('modalStockOut');
    refreshIcons();
}

function quickStockOut(productId) {
    openStockOutModal(productId);
}

function updateStockOutProductDetails() {
    const select = document.getElementById('stockOutProductSelect');
    const preview = document.getElementById('stockOutPreviewCard');
    const prod = products.find(p => p.id === select.value);

    if (prod && preview) {
        preview.classList.remove('hidden');
        document.getElementById('stockOutCurrentQty').textContent = `${prod.stock.toLocaleString()} ${prod.unit || 'ชิ้น'}`;
        document.getElementById('stockOutLocation').textContent = prod.location || 'ไม่ได้ระบุ';
    } else if (preview) {
        preview.classList.add('hidden');
    }
}

function handleStockOutSubmit(e) {
    e.preventDefault();
    const productId = document.getElementById('stockOutProductSelect').value;
    const qty = parseInt(document.getElementById('stockOutQty').value);
    const reason = document.getElementById('stockOutReason').value;
    const ref = document.getElementById('stockOutRef').value.trim() || 'DISPATCH';
    const operator = document.getElementById('stockOutOperator').value.trim() || 'ผู้เบิก';
    const note = document.getElementById('stockOutNote').value.trim();

    const prod = products.find(p => p.id === productId);
    if (!prod || qty <= 0) return;

    if (qty > prod.stock) {
        alert(`❌ ไม่สามารถเบิกสินค้าได้!\nจำนวนที่ต้องการเบิก (${qty}) มากกว่าจำนวนคงเหลือในคลัง (${prod.stock} ${prod.unit})`);
        return;
    }

    const beforeQty = prod.stock;
    prod.stock -= qty;
    saveProducts();

    // Add Log
    logs.unshift({
        id: 'log-' + Date.now(),
        type: 'OUT',
        productId: prod.id,
        sku: prod.sku,
        productName: prod.name,
        qty: qty,
        beforeQty: beforeQty,
        afterQty: prod.stock,
        refNumber: ref,
        operator: operator,
        note: `[${reason}] ${note}`.trim(),
        timestamp: new Date().toISOString()
    });
    saveLogs();

    closeModal('modalStockOut');
    renderAll();

    if (prod.stock <= prod.minStock) {
        showToast(`⚠️ เบิกออกสำเร็จ! แต่สินค้า "${prod.name}" เหลือเพียง ${prod.stock} ${prod.unit} (ต่ำกว่าจุดเตือน)`, 'warning');
    } else {
        showToast(`เบิกสินค้าออก ${qty} ${prod.unit} เรียบร้อย (คงเหลือ: ${prod.stock})`, 'success');
    }
}

// ==========================================
// TRANSACTION LOGS
// ==========================================
function renderTransactionsTable() {
    const tbody = document.getElementById('transactionTableBody');
    const emptyState = document.getElementById('transactionEmptyState');
    if (!tbody) return;

    const filterType = document.getElementById('logTypeFilter')?.value || 'ALL';

    const filtered = logs.filter(l => {
        if (filterType === 'ALL') return true;
        return l.type === filterType;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = '';
        emptyState?.classList.remove('hidden');
        return;
    }

    emptyState?.classList.add('hidden');

    tbody.innerHTML = filtered.map(l => {
        const isIn = l.type === 'IN';
        const isAdjust = l.type === 'ADJUST';
        const typeBadge = isIn
            ? `<span class="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800"><i data-lucide="arrow-down-left" class="w-3.5 h-3.5"></i><span>รับเข้า</span></span>`
            : isAdjust
            ? `<span class="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800"><i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i><span>ปรับปรุง</span></span>`
            : `<span class="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800"><i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i><span>เบิกออก</span></span>`;

        const changeSign = isIn ? `+${l.qty}` : `-${l.qty}`;
        const changeClass = isIn ? 'text-emerald-600 font-bold' : 'text-amber-600 font-bold';

        const d = new Date(l.timestamp);
        const dateStr = d.toLocaleDateString('th-TH', { day: '2-digit', month: 'short', year: 'numeric' });
        const timeStr = d.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });

        return `
            <tr class="hover:bg-slate-50 transition border-b border-slate-100 text-xs">
                <td class="px-4 py-3.5 whitespace-nowrap text-slate-500">
                    <div>${dateStr}</div>
                    <div class="text-[11px] text-slate-400">${timeStr} น.</div>
                </td>
                <td class="px-4 py-3.5 whitespace-nowrap">${typeBadge}</td>
                <td class="px-4 py-3.5">
                    <div class="font-medium text-slate-800 text-sm">${escapeHtml(l.productName)}</div>
                    <div class="font-mono text-[11px] text-slate-400">${escapeHtml(l.sku)}</div>
                </td>
                <td class="px-4 py-3.5 text-right text-sm ${changeClass}">${changeSign}</td>
                <td class="px-4 py-3.5 text-right font-medium text-slate-700 text-sm">${l.afterQty.toLocaleString()}</td>
                <td class="px-4 py-3.5 font-mono text-slate-600">${escapeHtml(l.refNumber || '-')}</td>
                <td class="px-4 py-3.5 text-slate-600">${escapeHtml(l.operator || '-')}</td>
                <td class="px-4 py-3.5 text-slate-500 max-w-xs truncate">${escapeHtml(l.note || '-')}</td>
            </tr>
        `;
    }).join('');

    refreshIcons();
}

function clearTransactionLogs() {
    if (confirm('คุณต้องการล้างประวัติการทำรายการทั้งหมดหรือไม่? (ยอดสต็อกปัจจุบันจะไม่ถูกกระทบ)')) {
        logs = [];
        saveLogs();
        renderAll();
        showToast('ล้างประวัติการทำรายการเรียบร้อย', 'info');
    }
}

// ==========================================
// BARCODE & QR SCANNER
// ==========================================
function startScanner() {
    const readerEl = document.getElementById('scannerReader');
    if (!readerEl) return;

    if (typeof Html5Qrcode === 'undefined') {
        readerEl.innerHTML = `
            <div class="p-4 text-center text-rose-500 text-xs">
                ไม่สามารถโหลดระบบกล้องสแกนเนอร์ได้ กรุณาใช้ช่องพิมพ์รหัสบาร์โค้ดด้านล่างแทน
            </div>
        `;
        return;
    }

    readerEl.innerHTML = '';
    html5QrScannerInstance = new Html5Qrcode("scannerReader");

    html5QrScannerInstance.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: { width: 220, height: 160 } },
        (decodedText) => {
            playBeepSound();
            stopAndCloseScanner();
            handleBarcodeFound(decodedText);
        },
        (errorMessage) => {
            // scan failure ignored
        }
    ).catch(err => {
        console.warn('Camera error:', err);
        readerEl.innerHTML = `
            <div class="p-4 text-center text-slate-500 text-xs space-y-2">
                <i data-lucide="camera-off" class="w-8 h-8 mx-auto text-slate-400"></i>
                <p>ไม่พบกล้องเว็บแคม หรือเบราว์เซอร์ไม่อนุญาตให้เปิดกล้อง</p>
                <p class="text-[11px] text-slate-400">คุณสามารถใช้ช่องกรอกรหัสบาร์โค้ด/SKU ด้านล่างเพื่อค้นหาได้ทันที</p>
            </div>
        `;
        refreshIcons();
    });
}

function stopAndCloseScanner() {
    if (html5QrScannerInstance) {
        html5QrScannerInstance.stop().then(() => {
            html5QrScannerInstance.clear();
            html5QrScannerInstance = null;
        }).catch(err => {
            console.error('Stop scanner error:', err);
            html5QrScannerInstance = null;
        });
    }
    closeModal('modalScan');
}

function handleManualBarcodeSearch() {
    const input = document.getElementById('manualScanInput');
    const code = input?.value.trim();
    if (!code) return;

    playBeepSound();
    stopAndCloseScanner();
    handleBarcodeFound(code);
}

function handleBarcodeFound(code) {
    const found = products.find(p => 
        (p.barcode && p.barcode.toLowerCase() === code.toLowerCase()) || 
        p.sku.toLowerCase() === code.toLowerCase()
    );

    if (found) {
        showToast(`พบสินค้า: [${found.sku}] ${found.name} (คงเหลือ: ${found.stock} ${found.unit})`, 'success');
        
        // Open quick action prompt
        setTimeout(() => {
            const action = prompt(`📦 พบสินค้า: ${found.name}\nรหัส: ${found.sku}\nคงเหลือ: ${found.stock} ${found.unit}\n\nพิมพ์ 1 = รับสินค้าเข้า\nพิมพ์ 2 = เบิกสินค้าออก\nพิมพ์ 3 = ดูในตารางสต็อก`);
            if (action === '1') {
                openStockInModal(found.id);
            } else if (action === '2') {
                openStockOutModal(found.id);
            } else if (action === '3') {
                switchTab('inventory');
                const search = document.getElementById('searchInput');
                if (search) {
                    search.value = found.sku;
                    renderInventoryTable();
                }
            }
        }, 200);
    } else {
        alert(`❌ ไม่พบสินค้ารหัส "${code}" ในระบบ\nคุณสามารถกดเพิ่มสินค้าใหม่ได้ที่ปุ่ม "+ เพิ่มสินค้า"`);
    }
}

// Synthetic Beep Sound using Web Audio API
function playBeepSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime); // 880 Hz
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
    } catch (e) {
        // audio blocked or unsupported
    }
}

// ==========================================
// EXPORT & BACKUP
// ==========================================
function exportToCSV() {
    if (products.length === 0) {
        showToast('ไม่มีข้อมูลสินค้าที่จะส่งออก', 'error');
        return;
    }

    const headers = ['รหัส SKU', 'บาร์โค้ด', 'ชื่อสินค้า', 'หมวดหมู่', 'ตำแหน่งชั้นวาง', 'หน่วยนับ', 'ต้นทุน (บาท)', 'ราคาขาย (บาท)', 'สต็อกคงเหลือ', 'จุดเตือนขั้นต่ำ'];
    const rows = products.map(p => [
        `"${p.sku}"`,
        `"${p.barcode || ''}"`,
        `"${(p.name || '').replace(/"/g, '""')}"`,
        `"${p.category || ''}"`,
        `"${p.location || ''}"`,
        `"${p.unit || ''}"`,
        p.costPrice || 0,
        p.sellPrice || 0,
        p.stock || 0,
        p.minStock || 0
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    downloadBlob(csvContent, `Stock_Inventory_${new Date().toISOString().slice(0, 10)}.csv`, 'text/csv;charset=utf-8;');
    showToast('ดาวน์โหลดไฟล์ Excel/CSV สินค้าเรียบร้อย', 'success');
}

function exportTransactionsCSV() {
    if (logs.length === 0) {
        showToast('ไม่มีประวัติการทำรายการที่จะส่งออก', 'error');
        return;
    }

    const headers = ['วันและเวลา', 'ประเภท', 'รหัส SKU', 'ชื่อสินค้า', 'จำนวน', 'สต็อกก่อนหน้า', 'สต็อกคงเหลือ', 'เลขที่อ้างอิง', 'ผู้ทำรายการ', 'หมายเหตุ'];
    const rows = logs.map(l => [
        `"${new Date(l.timestamp).toLocaleString('th-TH')}"`,
        `"${l.type === 'IN' ? 'รับเข้า' : l.type === 'OUT' ? 'เบิกออก' : 'ปรับปรุง'}"`,
        `"${l.sku}"`,
        `"${(l.productName || '').replace(/"/g, '""')}"`,
        l.qty,
        l.beforeQty,
        l.afterQty,
        `"${l.refNumber || ''}"`,
        `"${l.operator || ''}"`,
        `"${(l.note || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    downloadBlob(csvContent, `Stock_Transactions_${new Date().toISOString().slice(0, 10)}.csv`, 'text/csv;charset=utf-8;');
    showToast('ดาวน์โหลดประวัติการเคลื่อนไหว CSV เรียบร้อย', 'success');
}

function backupDataJSON() {
    const backupData = {
        version: '1.0',
        exportedAt: new Date().toISOString(),
        products,
        logs
    };
    const jsonStr = JSON.stringify(backupData, null, 2);
    downloadBlob(jsonStr, `WMS_Backup_${new Date().toISOString().slice(0, 10)}.json`, 'application/json');
    showToast('สำรองข้อมูลทั้งระบบเป็นไฟล์ JSON เรียบร้อย', 'success');
}

function restoreDataJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (Array.isArray(data.products)) {
                products = data.products;
                logs = Array.isArray(data.logs) ? data.logs : [];
                saveProducts();
                saveLogs();
                renderAll();
                showToast('กู้คืนข้อมูลสำเร็จเรียบร้อยแล้ว', 'success');
            } else {
                showToast('รูปแบบไฟล์สำรองไม่ถูกต้อง', 'error');
            }
        } catch (err) {
            showToast('เกิดข้อผิดพลาดในการอ่านไฟล์ JSON', 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function downloadBlob(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function loadSampleData(force = false) {
    if (force && !confirm('ต้องการโหลดข้อมูลตัวอย่างกลับมาหรือไม่? ข้อมูลสินค้าและประวัติที่มีอยู่จะถูกแทนที่')) {
        return;
    }
    products = JSON.parse(JSON.stringify(SAMPLE_PRODUCTS));
    logs = JSON.parse(JSON.stringify(SAMPLE_LOGS));
    saveProducts();
    saveLogs();
    renderAll();
    showToast('โหลดข้อมูลตัวอย่างเรียบร้อยแล้ว', 'success');
}

function confirmResetAllData() {
    if (confirm('คำเตือน: คุณต้องการลบข้อมูลทั้งหมดในระบบคลังสินค้านี้ใช่หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้!')) {
        products = [];
        logs = [];
        saveProducts();
        saveLogs();
        renderAll();
        showToast('ล้างข้อมูลระบบทั้งหมดเรียบร้อยแล้ว', 'info');
    }
}

// ==========================================
// PRINT REPORT
// ==========================================
function printInventoryReport() {
    const printDate = document.getElementById('printDate');
    const printTable = document.getElementById('printTableBody');
    const printQty = document.getElementById('printTotalQty');
    const printVal = document.getElementById('printTotalValue');

    if (printDate) printDate.textContent = new Date().toLocaleString('th-TH');

    let totalQty = 0;
    let totalVal = 0;

    if (printTable) {
        printTable.innerHTML = products.map((p, index) => {
            const subtotal = p.stock * p.costPrice;
            totalQty += p.stock;
            totalVal += subtotal;
            return `
                <tr class="border-b border-slate-200">
                    <td class="py-2">${index + 1}</td>
                    <td class="py-2 font-mono">${escapeHtml(p.sku)}</td>
                    <td class="py-2 font-medium">${escapeHtml(p.name)}</td>
                    <td class="py-2">${escapeHtml(p.category)}</td>
                    <td class="py-2">${escapeHtml(p.location || '-')}</td>
                    <td class="py-2 text-right">฿${p.costPrice.toLocaleString()}</td>
                    <td class="py-2 text-right font-bold">${p.stock.toLocaleString()} ${escapeHtml(p.unit)}</td>
                    <td class="py-2 text-right">฿${subtotal.toLocaleString()}</td>
                </tr>
            `;
        }).join('');
    }

    if (printQty) printQty.textContent = totalQty.toLocaleString();
    if (printVal) printVal.textContent = `฿${totalVal.toLocaleString()}`;

    window.print();
}

// ==========================================
// MODAL CONTROLS & UTILITIES
// ==========================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        if (modalId === 'modalScan') {
            startScanner();
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

function setupEventListeners() {
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            ['modalProduct', 'modalStockIn', 'modalStockOut', 'modalScan'].forEach(id => {
                if (id === 'modalScan') stopAndCloseScanner();
                else closeModal(id);
            });
        }
    });
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    const colors = {
        success: 'bg-emerald-600 text-white',
        warning: 'bg-amber-600 text-white',
        error: 'bg-rose-600 text-white',
        info: 'bg-slate-800 text-white'
    };

    const icons = {
        success: '<i data-lucide="check-circle" class="w-4 h-4 mr-2"></i>',
        warning: '<i data-lucide="alert-triangle" class="w-4 h-4 mr-2"></i>',
        error: '<i data-lucide="alert-circle" class="w-4 h-4 mr-2"></i>',
        info: '<i data-lucide="info" class="w-4 h-4 mr-2"></i>'
    };

    toast.className = `flex items-center px-4 py-3 rounded-xl shadow-lg text-sm font-medium animate-slide-up pointer-events-auto transition-all ${colors[type] || colors.info}`;
    toast.innerHTML = `${icons[type] || ''}<span>${escapeHtml(message)}</span>`;

    container.appendChild(toast);
    refreshIcons();

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
