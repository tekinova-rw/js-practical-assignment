const student = {
  name: "Amina",
  age: 20,
  grades: [70, 65, 80, 75],

  getAverage: function () {
    let sum = 0;

    for (let grade of this.grades) {
      sum += grade;
    }

    return sum / this.grades.length;
  }
};

console.log("Student:", student.name);
console.log("Average:", student.getAverage());

student.passed = student.getAverage() >= 50;

console.log("Passed:", student.passed);

const students = [
  {
    name: "Amina",
    age: 20,
    grades: [70, 65, 80, 75],

    getAverage: function () {
      let sum = 0;

      for (let grade of this.grades) {
        sum += grade;
      }

      return sum / this.grades.length;
    }
  },

  {
    name: "John",
    age: 21,
    grades: [40, 45, 35, 42],

    getAverage: function () {
      let sum = 0;

      for (let grade of this.grades) {
        sum += grade;
      }

      return sum / this.grades.length;
    }
  },

  {
    name: "Sarah",
    age: 19,
    grades: [85, 90, 78, 88],

    getAverage: function () {
      let sum = 0;

      for (let grade of this.grades) {
        sum += grade;
      }

      return sum / this.grades.length;
    }
  }
];

for (let student of students) {
  if (student.getAverage() >= 50) {
    console.log(student.name);
  }
}

