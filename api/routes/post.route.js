import exppess from "express";

const router = exppess.Router()

router.get("/test", (req,res)=>{
    console.log("Test");
})

export default router;