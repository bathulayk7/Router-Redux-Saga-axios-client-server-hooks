import { taskURL } from "../config/api";
import axios from "axios";
import {gql} from "@apollo/client"
import gqlClient from "../graphql/client"

export const getTasks = () => {
  // return axios.get(taskURL).then((res) => res.data);
 return gqlClient.query({
    query:gql`{
      tasks{
        id
        title
      }
    }`
  }).then(res=>res.data.tasks)
};

export const getSingleTask=(id)=>{
  // return axios.get(taskURL+"/"+id).then((res)=>res.data)
  return gqlClient.query({
    query:gql`{
      task(id:${id}){
        title
        description
        completed 
      }
    }`
  }).then((res)=>res.data.task)
}

/**
 *
 * @param {title,description} data
 */
export const addTask = (data) => {
  data.date=new Date()
  data.completed=false
    return axios.post(taskURL,data).then((res)=>res.data)
};

export const deleteTask = (id) => {
    return axios.delete(taskURL+"/"+id).then((res)=>res.data)
};
