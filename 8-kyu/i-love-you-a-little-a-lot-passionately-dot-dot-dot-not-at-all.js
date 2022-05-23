function howMuchILoveYou(nbPetals) {
  let arr = [0, "I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    return nbPetals % 6 == 0? arr[6] : arr[nbPetals % 6]
}