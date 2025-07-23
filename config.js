const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_49_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkwLFxuICAgICAgICAzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwLFxuICAgICAgICA5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI0LFxuICAgICAgICA3NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxLFxuICAgICAgICA0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ0LFxuICAgICAgICA2MixcbiAgICAgICAgNixcbiAgICAgICAgNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTExLFxuICBcImFkdlNlY3JldEtleVwiOiBcImRlemRDdytrWlJOa3hRVFZnajdhZGIvVXZaRzk0UDV3N0I2cktzdVo0eUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzU3NjY0NDYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzMDdCMTRDOUIzMTVBMzBEN0E0RDYwNTExOThEMzIyRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTMzMDM3OTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX0NLcVNfY0lSOVdPSmtBWkx2Z0pYd1wiLFxuICBcInBob25lSWRcIjogXCIyNjI5YjI2YS1jODUyLTQ2NjctOGEwZS1kZjJiYzUxN2ZmNWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICAxNzUsXG4gICAgICA5OSxcbiAgICAgIDkxLFxuICAgICAgMjA5LFxuICAgICAgMTU1LFxuICAgICAgMTkzLFxuICAgICAgMTI4LFxuICAgICAgOTMsXG4gICAgICAyMSxcbiAgICAgIDE0MSxcbiAgICAgIDg1LFxuICAgICAgMTU2LFxuICAgICAgMTI5LFxuICAgICAgMTIyLFxuICAgICAgMjcsXG4gICAgICAxMzIsXG4gICAgICAxOTEsXG4gICAgICA2MCxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgNDcsXG4gICAgICAxNzUsXG4gICAgICAyMyxcbiAgICAgIDY1LFxuICAgICAgNDIsXG4gICAgICAyNDQsXG4gICAgICAxMjUsXG4gICAgICA3NCxcbiAgICAgIDExNyxcbiAgICAgIDE2OCxcbiAgICAgIDExNSxcbiAgICAgIDkzLFxuICAgICAgNjMsXG4gICAgICA0MCxcbiAgICAgIDE0OCxcbiAgICAgIDQ1LFxuICAgICAgMTIxLFxuICAgICAgMTczLFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzJGeWdzUTY1V0Z4QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiemdIeWdCSFdLRG9XK1Y2cHIvQ2NUYVN1YVcxVWUyQWtBcDhDLzF0cVFvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpTcFd1TnJtVkh5QzgwSjNZcW5OK2Z3eEt6Y0JKWUhRMzlCci9DRjQ5VlgxZlZoWGQvekZUL2Q3QThHQlNpeGFERDd4eHFUTDZSMXBJVGpQc2RSa0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNmN3FpUEt6dndUT2NMbkJmdGJGNmtjMlJhbnN1NDAxU3JvTllzSWtPdGg0RkVFaEhmdTJQR3VibUo5aEJTZVlHaVdkL0YwMXhLc0JwMVFsWkN3MWhnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzU3NjY0NDYwOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM3MzM2NDM1OTQ5Njk0OjdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NTc2NjQ0NjA6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUzMzAzNzkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGlFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaCsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvMmpHT3VsbWdlUmp1LzdZcW0yREMvMm12T2lUUkFIN3RhS2NYaTRHdFh3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI0MjgxNzcxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaF9fLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZmVEbU5RNGQ2Q0RxSVRjNDJxMkdTZ1MvcENrdWk0RTJhdnNMcEZiUnVXbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNDI4MTc3MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzUyNjk3OTQ4MzQ3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGlBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRitTUFJIZ1k4MnNGVFphWG4wVVhPTzJ6K3RwUmFhMWQ1UE1jSnlzUXVkaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNDI4MTc3MSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGlCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQmVzZjEvTFpRMGkvSDk2T2E4bld6Mm5zd2RVNGNxaHJYbFFmUGNxTDFrVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNDI4MTc3MSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc1MzMwMTg3MjQxMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBpQy5qc29uIjogIntcImtleURhdGFcIjpcIjhDaDZnaVkrdDcwMW9ETGJpcWxyYzNYR25HQ1NzeXhGS05LK1lsbVdESFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjQyODE3NzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MzMwMjg3MjQxMlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBpRC5qc29uIjogIntcImtleURhdGFcIjpcImdqbUhZc2NFYkJ1K2IyZ0dpRVA5VEhOdDhVQzFaKzVxdDJnWHphSGZ6VDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjQyODE3NzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTMzMDMwMjU5NDJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaUUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGR2xlZHhSdjVxaU5pTmw4RjRETHBkZUF4Qmw0SmNmYTBqa1NacDh0N2lNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI0MjgxNzczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTMzMDM3OTY0NTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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
