export function ObjectsLevel2 () {
    interface Info{
        name?: string
        email: string;
        skills: string[];
        age: number;
        isLoggedIn: boolean;
        points: number
    }
    interface User {
         [key: string ]: Info
    }
    interface Skills {
        [key: string]: User;
    }
    const users: User = {
        Alex: {
          email: 'alex@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript'],
          age: 20,
          isLoggedIn: false,
          points: 30
        },
        Asab: {
          email: 'asab@asab.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
          age: 25,
          isLoggedIn: false,
          points: 50
        },
        Brook: {
          email: 'daniel@daniel.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
          age: 30,
          isLoggedIn: true,
          points: 50
        },
        Daniel: {
          email: 'daniel@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        John: {
          email: 'john@john.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
          age: 20,
          isLoggedIn: true,
          points: 50
        },
        Thomas: {
          email: 'thomas@thomas.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        Paul: {
          email: 'paul@paul.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
          age: 20,
          isLoggedIn: false,
          points: 40
        }
      }

      //1 
      let userHasMostSkill: string = Object.keys(users)[0];
      for (const [key, value] of Object.entries(users)) {
        if(value.skills.length > users[userHasMostSkill].skills.length ){
            userHasMostSkill = key;
        }
      }


      //2 
      let countUserLogged = 0;
      let countUserHasPoint50 = 0;
      for (const [key, value] of Object.entries(users)) {
        if(value.isLoggedIn ){
            countUserLogged++
        }
        if(value.points >= 50){
            countUserHasPoint50++;
        }
      }

      //3
      const mapObjBySkill: Skills = {};
      for (const [key, value] of Object.entries(users)) {
        value.skills.forEach((skill:string) => {
            // if(!mapObjBySkill[skill]){
            //     mapObjBySkill[skill] = {...mapObjBySkill[skill], [key]: value}
            // }
            mapObjBySkill[skill] = {...mapObjBySkill[skill], [key]: value}
        })
      }
      const listUserMERNStack:string[] = [];
      for (const [key, value] of Object.entries(users)) {
        const isMERNStack =  mapObjBySkill.React[key] &&  mapObjBySkill.MongoDB[key] &&  mapObjBySkill.Express[key] && mapObjBySkill.Node[key]
        if(isMERNStack){
            listUserMERNStack.push(key);
        }
      }
      console.log("TWE", mapObjBySkill);
      console.log("TWE", listUserMERNStack);

      //4
      const obj = {...users , ['Long'] : {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
      }}

      //5
      for( const key in users){
        console.log(' get all keys:', key);
      }

      //6
      for( const key in users){
        console.log(' get all value:', users[key]);
      }

      //7

}