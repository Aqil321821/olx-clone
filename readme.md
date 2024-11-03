## A react app 
# clone of olx website with react UI library

with firebase login functionality

props?.setLoginPop(false):

props?.setLoginPop => syntax mein ?. (optional chaining) ka use kiya gaya hai, jo ensure karta hai ki agar props ya setLoginPop undefined hai toh error throw nahi hoga. Agar props object ya setLoginPop function exist nahi karta, toh yeh expression simply undefined return karega aur click event fail nahi hoga.