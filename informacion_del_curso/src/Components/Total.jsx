
// eslint-disable-next-line react/prop-types
export const Total = ({parts}) => {

    let totalExercises = 0;
    for (const part of parts) {
      totalExercises += part.exercises;
    }
  return (
    <div>Number of exercises :
         {totalExercises}
    </div>
  )
  }
       