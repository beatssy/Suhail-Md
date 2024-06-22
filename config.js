const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2250565959101" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "225056595910";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_44_06_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICA2MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg0LFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDkwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDMxLFxuICAgICAgICA0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICA4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg4LFxuICAgICAgICAzLFxuICAgICAgICA5MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAyLFxuICAgICAgICA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZIWXlUM3h3YTNydWNMeFJjRzlVQXR1UEIyelFIbGlHMlp0VGU3eVJNMGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkMydmV0bHJUVDF1RmpOYkFoZTl6cndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDE1ZDg4NDctMTg1Ny00YjAzLThiOGItNjY5NTczYjRmNTE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDU3LFxuICAgICAgNjUsXG4gICAgICAyMDcsXG4gICAgICAxMDcsXG4gICAgICAxMDQsXG4gICAgICAyMDYsXG4gICAgICAxMjUsXG4gICAgICA3OCxcbiAgICAgIDIwMCxcbiAgICAgIDEyNSxcbiAgICAgIDE2NixcbiAgICAgIDEzNSxcbiAgICAgIDIyNixcbiAgICAgIDI1MixcbiAgICAgIDI2LFxuICAgICAgOTMsXG4gICAgICAxNTgsXG4gICAgICAyNyxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDYsXG4gICAgICA1NixcbiAgICAgIDExMyxcbiAgICAgIDIxOCxcbiAgICAgIDIzNixcbiAgICAgIDExNyxcbiAgICAgIDEzNyxcbiAgICAgIDExNyxcbiAgICAgIDk1LFxuICAgICAgMTc2LFxuICAgICAgMTc4LFxuICAgICAgMTgsXG4gICAgICAxMDYsXG4gICAgICAxMzUsXG4gICAgICAxNTAsXG4gICAgICA3MSxcbiAgICAgIDI5LFxuICAgICAgMTU0LFxuICAgICAgNDEsXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTThEUjVNRkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTY1OTU5MTAxOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg1OTY0MDU1NjgzMjM1OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjdmNnVRR0VPakNvN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuNE9nQUpqYU5QK3JZc1JNd25RZXloazUvU3ZOTk5JdWJkTG15ZEZ5YmhnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkEyTVA3eXhhQUg3dTZoNGNYOXZwN0NxUDR6SDRJVVZ0Z3ZodFE4K1c4b2syYks4Zi94Z1NrbmlhWE1idGJ0NjY2UFlrME1VbHZLM0pnNmplT1NYb0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVnUnlUZUZlTFNuVk5UYUR0dzhOWmppbkRxdHZKczB4SFo2WFFpWW1SU2tESGtzc3plbGd4T2ZiQW5ldmZsbzVDbnV4b2Y1akhZdDZjU3c5WjhWUUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTY1OTU5MTAxOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgxNDk0ODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCSHVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJIdS5qc29uIjogIntcImtleURhdGFcIjpcIjVVWmE3NHR1MWZMU0pmaEpSQkFEa2tDWWlPb2VmOFh5VXNtMm4wcTNsNUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgyMjA3Njg5NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MTQ5NDkwOTg4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "maelys",
  ownername:process.env.OWNER_NAME|| "maelys",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
