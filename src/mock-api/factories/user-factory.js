import { Factory } from "miragejs";

export const userFactory = Factory.extend({
  name(index) {
    return "user " + index;
  },
  email(index) {
    return `user${index}@titanspace.co`;
  },
});
