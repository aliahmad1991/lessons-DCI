const express = require('express');
const router = express.Router();
const members = require('../../members');

// get all members
router.get('/',(req,res)=>{
    res.json(members);
});
router.get('/:id',(req,res)=>{
    const  found = members.some(item => item.id === parseInt(req.params.id));
    
    if(found){
        res.json(
            members.filter(item =>item.id===parseInt(req.params.id))
        )
    }else{
        res.status(400).json({msg:`no member with the id of ${req.params.id}`})
    }
    

});

// create member
router.post('/',(req,res)=>{
  // res.send(req.body);
  const newMember ={
      name:req.body.name,
      email:req.body.email,
      status:req.body.statys
  };
 // res.send(newMember);
  if(!newMember.name || !newMember.email){
      return res.status(400).json({msg:'please include a name and email'})
  }
  members.push(newMember);
  res.json(members);
});
router.put('/:id',(req,res)=>{
    const found = members.some(item=>item.id===parseInt(req.params.id));
    if(found){
        const updMember= req.body;
        members.forEach( member=>{

            if(member.id===parseInt(req.params.id)){
                member.name=updMember.name ? updMember.name: member.name;
                member.email=updMember.email ? updMember.email:member.email;
                member.status=updMember.status ? updMember.status : member.status;
                res.json({msg:'Member has updated',member})
            }
        })
    }else{
        res.status(400).send({msg:`No member with the id ${req.params.id}`});
    }
});
router.delete('/:id',(req,res)=>{
    const found = members.some(item=>item.id === parseInt(req.params.id));
    if(found){

    }
})

module.exports = router;