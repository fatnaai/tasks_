 class School{
   constructor(name,level,numberOfStudents){
     this.name_=name;
     this.level_=level;
     this.numberOfStudents_=numberOfStudents;
  }
   get name(){
    return this.name_;
   }
   get level(){
    return this.level_
   }
   get numberOfStudents(){
    return this.numberOfStudents_;
   }
   set numberOfStudents(numberOfStudents){
    if( typeof Newnumber=='Number' ){
        return this.numberOfStudents_=Newnumber;
    }
    else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
   }
     quickFacts(){
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
     static pickSubstituteTeacher(substituteTeachers){
     let rendomNumber=Math.floor(Math.random()*substituteTeachers.length);
    }
   }
   class PrimarySchool extends School{
     constructor(name,numberOfStudents,pickupPolicy){
     super(name,'primary',numberOfStudents)
     this.pickupPolicy_=pickupPolicy;
     }
     get pickupPolicy(){
       return this.pickupPolicy_;
     }
   }
    class HighSchool extends School{
      constructor(name,numberOfStudents,sportsTeams){
        super(name,'high',numberOfStudents)
        this.sportsTeams_=sportsTeams;
      }
      get sportsTeams(){
        return this.sportsTeams_=this.sportsTeams;
      }
    }
    const lorraineHansbury= new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13');
      lorraineHansbury.quickFacts();
      School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
    const alSmith=new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
     console.log(alSmith.sportsTeams_);

