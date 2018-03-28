
//In the below enum; Sunday will be assigned a value of 0, Monday wil be assigned a value 1 and so on..


enum DaysOfTheWeek{
    SUN, MON, TUE, WED, THU, FRI, SAT
}

let day : DaysOfTheWeek;
day = DaysOfTheWeek.MON;

if (day === DaysOfTheWeek.MON){ //Comparision is done using the assigned value
    console.log("Happy Monday!!");
}

//In the below enum; Sunday will be assigned a value of 100, Monday wil be assigned a value 101 and so on..

enum DaysOfTheWeekWithCustomValue{
    SUN=100, MON, TUE, WED, THU, FRI, SAT
}