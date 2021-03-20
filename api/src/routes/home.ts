import { Router, Request, Response } from 'express';

const home = Router();

home.get('/users/:id', (request: Request, response: Response) => {
  const id = request.params.id;

  if(id == '1') {
    response.status(200).send({
      id: id,
      name: 'Rafael Cammarano Guglielmi',
      jobTitle: 'Software Engineer',
      favouriteFood: 'Lasagne'
    });
  }

  else {
    response.status(400).send({ 
      message: "invalid user"
    });
  }

});

export default home;
