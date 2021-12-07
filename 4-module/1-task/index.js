function makeFriendsList(friends) {
  let liments = '';
  for (let friend of friends) {
    liments += `<li>${friend.firstName} ${friend.lastName}</li>`;
  }
  let ul = document.createElement('ul');
  ul.innerHTML = liments;
  return ul;
}