// THIS IS FOR TYPE OF THE VALIDATION SHOULD BE IN THE CODE LIKE TITLE SHOULD BE STRING.
//z => zod 
const z = require("zod");

const userTodo = z.object({
    title: z.string(),
    description: z.string()
});

const updateTodo = z.object({
    id: z.string(),
});
// MODULE EXPOET HELPS IN TO EXPORT THE OBEJECT WE CREATED TO GENREALIZE THING 

module.exports={
    userTodo,
    updateTodo
}

