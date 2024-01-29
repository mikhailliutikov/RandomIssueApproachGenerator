import { Component } from '@angular/core';

function getRandomWord(list: string[]): string {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

@Component({
  selector: 'app-word-generator',
  templateUrl: './word-generator.component.html',
  styleUrls: ['./word-generator.component.css']
})
export class WordGeneratorComponent {
  word1: string = '';
  word2: string = '';
  word3: string = '';
  subject1: string = '';
  subject2: string = '';
  imagePath1: string = "";
  imagePath2: string = "";
  imagePath3: string = "";
  isButtonPressed: boolean = false;

  mathematics: string[] = ['College Algebra', 'Calculus 1', 'Differential Calculus', 'Integral Calculus', 'Linear Algebra', 'Finite Mathematics', 'Mathematical Proof', 'Multivariate Calculus', 'Differential Equations', 'Discrete Mathematics'];
  biology: string[] = ['Biology of Sex and Death', 'Organismal Biology', 'Ecology', 'Genetics', 'Microbiology', 'Cell and Molecular Biology', 'Human Anatomy', 'Human Physiology', 'Molecular Evolution', 'Population Dynamics', 'Immunology'];
  computerScience: string[] = ['Object Oriented programming', 'Data Structures and Algorithms', 'Computer Org', 'Systems and Networks', 'Objects and Design', 'Operating Systems', 'Languages and Computation', 'Embedded Systems', 'Creative Design'];
  me: string[] = ['Rigid Body dynamics', 'System Dynamics', 'Thermodynamics', 'Fluid Mechanics', 'Heat Transfer', 'Internal Combustion Engines', 'Hybrid Vehicle Powertrains', 'Mechanical Vibrations', 'Robotics'];

  problems: string[] = ['Climate Change', 'Poverty', 'Healthcare', 'Hunger', 'Education Levels', 'Human Rights', 'Gender Inequality', 'Terrorism', 'Corruption', 'Pollution', 'Disease', 'Internet Privacy'];

  subjects: { [key: string]: string[] } = {};

  constructor() {
    this.subjects = {
      "mathematics": this.mathematics,
      "biology": this.biology, 
      "computerScience": this.computerScience, 
      "me": this.me
    };
  }

  generateRandomWords(): void {
    this.isButtonPressed = true;

    this.subject1 = this.getRandomSubjectKey();
    this.subject2 = this.getRandomSubjectKey(this.subject1);

    this.word1 = getRandomWord(this.subjects[this.subject1]);
    this.word2 = getRandomWord(this.subjects[this.subject2]);
    this.word3 = getRandomWord(this.problems);

    // Construct image paths with multiple formats
    this.imagePath1 = this.getImagePath(this.word1, this.subject1);
    this.imagePath2 = this.getImagePath(this.word2, this.subject2);
    this.imagePath3 = this.getImagePath(this.word3, 'problems');
  }

  getImagePath(word: string, subFolder: string = ''): string {
    const sanitizedWord = word.toLowerCase().replace(/\s+/g, '');
    const formats = ['jpeg', 'jpg', 'png', 'webp', 'gif'];
    let imagePath = '';
    formats.forEach(format => {
      const path = `assets/${subFolder}/${sanitizedWord}.${format}`;
      if (!imagePath && this.imageExists(path)) {
        imagePath = path;
      }
    });
    return imagePath;
  }

  imageExists(url: string): boolean {
    const http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status !== 404;
  }

  getRandomSubjectKey(excludeKey: string = ''): string {
    let keys = Object.keys(this.subjects);
    if (excludeKey) {
      keys = keys.filter(key => key !== excludeKey);
    }
    return keys[Math.floor(Math.random() * keys.length)];
  }
}
