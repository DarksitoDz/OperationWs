/** 
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `*╭───── 「 𝐒𝐔𝐏𝐄𝐑𝐁𝐎𝐓 - 𝐌𝐃 」 ──────*
│ hola @user bienvenido este bot es nuevo todavía está el desarrollo por eso sin algun comando falla no dude el informa al creador
│ 🔸*menuprueba*
└────
╭─「 %category 」
│ • 
╰────\n`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/10842a031f39684aa2297.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'grupo',
               url: 'https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k'
             }

           },
               {
             callButton: {
               displayText: 'owner',
               id: '.owner',
             }
           },           
               {
             quickReplyButton: {
               displayText: 'descarga',
               id: '.descarga',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['prueba']
handler.tags = ['info']
handler.command = /^prueba(com|ple)|prueba$/i

module.exports = handler
