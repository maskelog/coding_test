function solution(my_string) {
      let result = "";

      for (let i = 0; i < my_string.length; i++) {
        if ('A' <= my_string[i] && my_string[i] <= 'Z') {
          result += my_string[i].toLowerCase();
        } else if ('a' <= my_string[i] && my_string[i] <= 'z') {
          result += my_string[i].toUpperCase();
        } else {
          result += my_string[i];
        }
      }
      return result;
    }