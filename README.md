Community Events

001 MongoLab Drywall Setup Part A

mongolab.com

create new database: comevents  
create a new user: user1


    # npm install -g grunt-cli

https://github.com/jedireza/drywall/

    $ git clone https://github.com/jedireza/drywall/  comevents
    $ cd comevents/
    $ npm install

    $ cp config.example.js config.js
    $ vi config.js
    $ grunt

002 MongoLab  Drywall Setup Part B

    $ mongo ds027744.mongolab.com:27744/comevents -u user1 -p user1
    rs-ds027744:PRIMARY> use comevents

    db.admingroups.insert({ _id: 'root', name: 'Root' });
    db.admins.insert({ name: {first: 'Root', last: 'Admin', full: 'Root Admin'}, groups: ['root'] });
    var rootAdmin = db.admins.findOne();
    db.users.save({ username: 'root', isActive: 'yes', email: 'your@email.addy', roles: {admin: rootAdmin._id} });
    var rootUser = db.users.findOne();
    rootAdmin.user = { id: rootUser._id, name: rootUser.username };
    db.admins.save(rootAdmin);

    db.users.update({email:'your@email.addy'}, {$set: {email:'your_email@gmail.com'}})


reset password by link:  
http://localhost:3000/login/forgot/


003 Event Schema Frontend Display Part A

004 Event Schema Frontend Display Part B


    $ mongo ds027744.mongolab.com:27744/comevents -u user1 -p user1
    rs-ds027744:PRIMARY> use comevents
    rs-ds027744:PRIMARY> show collections
    rs-ds027744:PRIMARY> db.createCollection('events');

    rs-ds027744:PRIMARY> db.events.insert({name:'Event One', description:'This is the description', date:new Date('July 04,2015'), venu: 'Venu One', startTime:'2:00pm', endTime:'5:00pm', username:'brad'})

    rs-ds027744:PRIMARY> db.events.find().pretty();
    {
    	"_id" : ObjectId("560fbefca828926163531a0f"),
    	"name" : "Event One",
    	"description" : "This is the description",
    	"date" : ISODate("2015-07-04T00:00:00Z"),
    	"venu" : "Venu One",
    	"startTime" : "2:00pm",
    	"endTime" : "5:00pm",
    	"username" : "brad"
    }

<br/>

    $ grunt


005 Details Page Adding Events

006 Details Page Adding Events Part B

    $ npm install --save connect-flash
    $ npm install --save express-messages

    $ grunt

007 Edit and Delete Events

008 Edit and Delete Events Part B

    $ grunt
<br/>
