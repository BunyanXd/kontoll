let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
HANYA MENERIMA MATA UANG INDONESIA 
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*GOPAY*_✅ : 
║│- 089502435112
║│
║│➸ _*DANA*_✅: 
║│- 085811055800
║│
║│➸ _*OWNER*_
║│- wa.me/6285811055800
║╰────────────
╰═══════════════
`.trim(), 'Donasi jan asal mencet', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
