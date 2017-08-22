function isIsogram(str){
  if (typeof str === undefined){
   return true
   }

   var passing = true;
   var str2 = str.toLowerCase()
   var counts = {}

   for (i = 0; i <= str2.length; i++) {
     var letter = str2.charAt(i)
      if(counts[letter]) {
        counts[letter] = 1 + counts[letter]
      } else {
        counts[letter] = 1
      }

      if(counts[letter] > 1) {
        return passing = false
      }
    }

    return passing
  }
