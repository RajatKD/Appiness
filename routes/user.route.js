const route = require('express').Router();

const users = [];
const userRoles = [];

route.post('/', (req, res) => {
    console.log("kjfbgier", req.body);


    
    const { userId, name } = req.body;
    let role;

    if(users.length === 0) {
        role = 'ADMIN';
    } else {
        role = 'USER';
    }

    const roleId = Math.random();
    userRoles.push({
        _id: roleId,
        roleName: role
    });

    const userIdGen = Math.random();
    const userObj = {
        _id: userIdGen,
        userId: userId,
        name: name,
        role: roleId
    }

    users.push(userObj);

    console.log("user Info saved!");
    res.send(userObj)
});

route.get('/', (req, res)=>{ 
    console.log('Result getting...');
    let count=0;
    let result=[];
    if(users.length === 0) {
        return res.json({ message: 'Zero data detected'});
    }
    for(let i=0; i < users.length; i++) {
        const obj = {
            _id: users[i]._id,
            name: users[i].name,
            userId: users[i].userId,
            role : userRoles[i].roleName
        }
        result.push(obj);
        count ++;
        console.log("Incrementing count : ", count, " length : ", users.length);
        if(count === users.length) {
            return res.json(result);
        }
    }
});

module.exports = route;