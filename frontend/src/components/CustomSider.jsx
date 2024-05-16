import React from "react";
import { Layout, Image } from "antd";
const { Sider } = Layout;

const CustomSider = () => {
  
  const items = [
    {
      profilePic:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      username: "Test1",
      lastSeen: "15:20",
      chat: "Hello",
    },
    {
      profilePic:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      username: "Test2",
      lastSeen: "16:20",
      chat: "demo chat",
    },
    {
      profilePic:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      username: "Test3",
      lastSeen: "15:25",
      chat: "demo chat 2",
    },
    {
      profilePic:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      username: "Test4",
      lastSeen: "9:20",
      chat: "demo chat 3",
    },
    {
      profilePic:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      username: "Test5",
      lastSeen: "6:40",
      chat: "demo chat 4",
    },
    {
      profilePic:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      username: "Test6",
      lastSeen: "5:15",
      chat: "demo chat 5",
    },
  ];

  const handleChat=(user)=>{
    console.log(user);
  }

  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width={"30%"}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        className="border-r h-full"
      >
          
        {items?.map((user)=>(
           <div
           id="chat-box"
           className="flex flex-row justify-between cursor-pointer gap-5 p-[2%] border-b"
           onClick={()=>handleChat(user)}
         >
           <div id="image-username-chat-col" className="flex flex-row gap-4">
             <div id="image-column" className="flex flex-col">
               <Image
                 width={55}
                 className="rounded-full"
                 preview={false}
                 src={`${user.profilePic}`}
               />
             </div>
             <div
               id="username-chat-column"
               className="flex flex-col justify-around"
             >
               <div id="user-name-row" className="flex flex-row font-bold">
                 {user.username}
               </div>
               <div id="chat-row" className="flex flex-row">
                 {/* Trim the chat */}
                 {user.chat}
               </div>
             </div>
           </div>
           <div
             id="last-seen-column"
             className="flex flex-col font-semibold text-sm"
           >
             {user.lastSeen}
           </div>
         </div>

       
        ))}
        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} /> */}
      </Sider>
    </>
  );
};

export default CustomSider;
