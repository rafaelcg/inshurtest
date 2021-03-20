import { Router, Request, Response } from 'express';

const home = Router();

home.get('/users/:id', (request: Request, response: Response) => {
  const id = request.params.id;

  if(id == '1') {
    response.status(200).send({
      id: id,
      name: 'Rafael Cammarano Guglielmi',
      jobTitle: 'Software Engineer',
      favouriteFood: 'Lasagne',
      photoURL: 'https://www.nme.com/wp-content/uploads/2020/06/Liam-Gallagher-696x442.jpg'
    });
  }

  else {
    response.status(400).send({ 
      message: "invalid user"
    });
  }

});

export default home;
