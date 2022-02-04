function bestFriend(nameOfFriends){
    let bestOne = "";
    for(let friend of nameOfFriends){
           if(friend.length>bestOne.length){
                bestOne = friend;
            }
    }
    return bestOne;
}
console.log(bestFriend(["Mimma","Asif","Nayim","Sagor","Rana","Jack","Pricila","Zarin","Fowzia","Mim"]));
