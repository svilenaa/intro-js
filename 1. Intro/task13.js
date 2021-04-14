function distanceTime([speed1, speed2, timeInHours]){

    [speed1, speed2, timeInHours] = [speed1, speed2, timeInHours].map(Number);
    let distance1 = [speed1] * [timeInHours];
    let distance2 = [speed2] * [timeInHours];

    let distancebetweenobjects = distance1 - distance2;


    console.log('Разстоянието между 2-та обекта е:' + " "  + (distancebetweenobjects) + 'км');

}

distanceTime(['50' ,'32' ,'2']);
//distanceTime([0, 60, 1]);