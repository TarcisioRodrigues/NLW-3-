import {Request,Response} from 'express'
import Orphanage from '../models/Orphanage';
import orphanageView from '../views/orphanages_views';
import {getRepository} from 'typeorm';
import * as Yup from 'yup';
export default{
  //Criação
  async create(request:Request,response:Response){
    const{
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_on_weekends,
      opening_hours,
    }=request.body;
    const orphanagesRepository=getRepository(Orphanage);
    const requestImages=request.files as Express.Multer.File[];
    const images=requestImages.map(image=>{
      return{path:image.filename}
    })
    const data={
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_on_weekends,
      opening_hours,
      images
    }
    //Validação dos dados
    const schema=Yup.object().shape({
      name:Yup.string().required(),
      latitude:Yup.number().required(),
      longitude:Yup.number().required(),
      about:Yup.string().required().max(300),
      instructions:Yup.string().required(),
      open_on_weekends:Yup.boolean().required(),
      opening_hours:Yup.string().required(),
      images:Yup.array(Yup.object().shape({
        path:Yup.string().required()
      }))
 
    })
    await schema.validate(data,{
      abortEarly:false,
    })
    const orphanage=orphanagesRepository.create(data);
     await orphanagesRepository.save(orphanage)
  
     return response.status(201).json(orphanage)
  },
  //Listagem
  async index(request:Request,response:Response){
    const orphanagesRepository=getRepository(Orphanage);
    const orphanages=await orphanagesRepository.find({
      relations:['images']
    });   
    return response.json(orphanageView.renderMany(orphanages));
},
async show(request:Request,response:Response){
  const {id}=request.params
  const orphanagesRepository=getRepository(Orphanage);
  const orphanage=await orphanagesRepository.findOneOrFail(id,{
    relations:['images']
  });   
  return response.json(orphanageView.render(orphanage));
},

}