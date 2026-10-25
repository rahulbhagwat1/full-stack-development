import Message from "../model/messageSchema.js";
import Chat from "../model/chatSchema.js";

export const getMessage= async(req,res)=>{

    try{
        const {chatId}=req.params;

        const chat = await Chat.findOne({
            _id : chatId,
            userId:req.user._id
        })
        
        if(!chat){
            return res.status(404).json({
                message:"not found"
            });
        }
        
        const messages = Message.find({
            chatId
        }).sort({createdAt:1});

        res.status(200).json({
            message:"your all messages are.......",
            msg:messages
        })


    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"internal server error"
        });
    }
}

export const sendMessage= async(req,res)=>{
    try{
        const {content} = req.body;
        const {chatId} = req.params;

        if(!content || content.trim()==""){
            return res.status(400).json({
                message:"heyy!!... You didnt written anything"
            })
        }

        const chat = await Chat.findOne({
            _id:chatId,
            userId: req.user._id
        })

        if(!chat){
            return res.status(404).json({
                message:"user corresponding to this chat not found"
            });
        }

        const msg = await Message.create({
            userId:req.user._id,
            chatId:chatId,
            role:"user",
            content:content
        })

        const DummyReply = "i love amu"

        const reply = await Message.create({
            userId:req.user._id,
            chatId:chatId,
            role:"assistant",
            content:DummyReply
        })

        res.status(201).json({
            message:DummyReply
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"internal server error"
        });
    }
}