export interface SetData {
    id: string;
    weight: number;
    reps: number;
    isCompleted: boolean;
}

export interface ExerciseData {
    id: string;
    name: string;
    restTimeSeconds: number;
    sets: SetData[];
}

export interface WorkoutPlan {
    title: string;
    focus: string;
    exercises: ExerciseData[];
    aiMessage: string;
}

