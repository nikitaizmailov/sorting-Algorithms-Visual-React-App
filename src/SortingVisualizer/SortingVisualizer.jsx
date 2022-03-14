import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/mergeSortLogic.js';
import {getBubbleSortAnimations} from '../sortingAlgorithms/bubbleSortLogic.js';
import {getHeapSortAnimations} from '../sortingAlgorithms/heapSortLogic.js'
import {getQuickSortAnimations} from '../sortingAlgorithms/quickSortLogic.js';
import { getRadixSortAnimations } from '../sortingAlgorithms/radixSortLogic.js';
import { getSelectionSortAnimations } from '../sortingAlgorithms/selectionSortLogic.js';
import { getInsertionSortAnimations } from '../sortingAlgorithms/insertionSort.js';

import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 200;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'lightblue';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

// This is the time taken for the selected Sorting Algorithm to run.
let timeTaken = 0;

export default class SortingVisualizer extends React.Component {

  // We using constructor when initialising an object from this class in order to gain
  // access to the props property and state property. Both now can be called via this.props and this.state 
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      timeTaken: timeTaken,
      numArrayBars: NUMBER_OF_ARRAY_BARS,
    };
  }
  
  // componentDidMount() is a method is invoked after the component has been rendered.
  // You can also add setState() method inside it, which will second time re-render the component
  componentDidMount() {
    this.resetArray();
  }

  resetArray = () => {
    const array = [];
    for (let i = 0; i < this.state.numArrayBars; i++) {
      array.push(randomIntFromInterval(5, 600));
    }
    const resetTime = 0;
    this.setState({
      array: array,
      timeTaken: resetTime,
    });
  }

  insertionSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
    const animations = getInsertionSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (Array.isArray(animations[i][0]))
      if (!isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const twoPackArray = animations[i]
        for (let ind = 0; ind < twoPackArray.length; ind++) {
          setTimeout(() => {
            const [barOneIdx, newHeight] = twoPackArray[ind];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS)
        }
      }
    }
  }

  selectionSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
    const animations = getSelectionSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (Array.isArray(animations[i][0]))
      if (!isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const twoPackArray = animations[i]
        for (let ind = 0; ind < twoPackArray.length; ind++) {
          setTimeout(() => {
            const [barOneIdx, newHeight] = twoPackArray[ind];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS)
        }
      }
    }
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
    const animations = getQuickSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (Array.isArray(animations[i][0]))
      if (!isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const twoPackArray = animations[i]
        for (let ind = 0; ind < twoPackArray.length; ind++) {
          setTimeout(() => {
            const [barOneIdx, newHeight] = twoPackArray[ind];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS)
        }
      }
    }
  }

  heapSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
    const animations = getHeapSortAnimations(this.state.array);
    console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (Array.isArray(animations[i][0]))
      if (!isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const twoPackArray = animations[i]
        for (let ind = 0; ind < twoPackArray.length; ind++) {
          setTimeout(() => {
            const [barOneIdx, newHeight] = twoPackArray[ind];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS)
        }
      }
    }
  }

  bubbleSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
    const animations = getBubbleSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (Array.isArray(animations[i][0]))
      if (!isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const twoPackArray = animations[i]
        for (let ind = 0; ind < twoPackArray.length; ind++) {
          setTimeout(() => {
            const [barOneIdx, newHeight] = twoPackArray[ind];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS)
        }
      }
    }
  }

  radixSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
    const animations = getRadixSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (animations[i][0] === animations[i][1])
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  
  // a slider method to increase or decrease the number of bars in the array to sort.
  handleChange(e){
    const valueChange = e.target.value;
    this.setState({numArrayBars: valueChange});
    this.resetArray();
  }


  render() {
    const {array} = this.state;

    return (
      <React.Fragment>
        <div className="text-center">
          <span className='buttonDiv'>
            <button className='btn btn-success' onClick={() => this.resetArray()}>Generate New Array</button>
          </span>
          <span className='buttonDiv'>
            <button className='btn btn-success' onClick={() => this.insertionSort()}>Insertion Sort</button>
          </span>
          <span className='buttonDiv'>
            <button className='btn btn-success' onClick={() => this.selectionSort()}>Selection Sort</button>
          </span>
          <span className='buttonDiv'>
            <button className='btn btn-success' onClick={() => this.mergeSort()}>Merge Sort</button>
          </span>
          <span className='buttonDiv'>
            <button className='btn btn-success' onClick={() => this.quickSort()}>Quick Sort</button>
          </span>
          <span className='buttonDiv'>
            <button className='btn btn-success' onClick={() => this.heapSort()}>Heap Sort</button>
          </span>
          <span className='buttonDiv'>
            <button className='btn btn-success' onClick={() => this.bubbleSort()}>Bubble Sort</button>
          </span>
          <span className='buttonDiv'>
            <button className='btn btn-success' onClick={() => this.radixSort()}>Radix Sort</button>
          </span>
          <div className='sliderBar'>
            Array Size To Sort: <input type="range" min="50" max="280" name='numArrayBars' value={this.state.numArrayBars} onChange={(e) => {this.handleChange(e)}} />
            {this.state.numArrayBars}
          </div>
          <div className='array-container'>
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                }}></div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}