friendsArray = ['hello', 'jello', 'agent007', 'jhonwick', 'jhonBanegaDon', 'ChaddiWalaChor', 'condomChor']
function megaFriends(friends){
    if(Array.isArray(friends) == false){
        return "please provide an array of srtrings";
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
};

const myBigBuddy = megaFriends(friendsArray);
// console.log(myBigBuddy);

if(friendsArray.indexOf('agent007') != -1){
    console.log('exists');
}
