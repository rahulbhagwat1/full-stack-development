import Chat from "../model/chatSchema.js";
import Message from "../model/messageSchema.js";

// chatRouter.post("/createChat",createChat);
// chatRouter.get("/recentChat",recentChat);
// chatRouter.post(":getSingleChat",getSingleChat);
// chatRouter.post(":deleteChat",deleteChat);


export const createChat = async(req,res)=>{
    try{
        const model = req.body;
        if(!model){
            return res.status(400).json({
                message:"select the model"
            })
        }

        const chat = await Chat.create({
            userId: req.user._id,
            model  
        });

        res.status(201).json({
            chatId: chat._id,
            userId: req.user._id,
            model,
            topic: chat.topic,
            createdAT: chat.createdAt
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"internal server error"
        });
    }
}

export const recentChat = async(req,res)=>{
    try{

        recentChat = await Chat.find({userId:req.user._id}).select("topic updatedAt").sort({updatedAt:-1}).limit(20);
        res.json(recentChat);

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"internal server error"
        });
    }
}

export const getSingleChat = async(req,res)=>{
    try{
        const {chatId}=req.params;
        const chat = await Chat.findOne({_id:chatId , userId:req.user_id});

        if(!chat){
            return res.status(404).json({
                message:"not found"
            });
        }

        res.status(200).json({
            topic:chat.topic,
            model:chat.model,
            summary:chat.summary,
            usage:chat.usage
        });

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"internal server error"
        });
    }
}

export const deleteChat = async(req,res)=>{
    try{
        const chatId=req.params;
        const chat = await Chat.findOne({_id:chatId , userId:req.user_id});

        if(!chat){
            return res.status(404).json({
                message:"you are not allowed to do this "
            });
        }

        Message.deleteMany({chatId:chat._id});

        Chat.deleteOne({_id :chat._id});

        res.status(200).json({
            message: "Your chat deleted successfully"
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"internal server error"
        });
    }
}