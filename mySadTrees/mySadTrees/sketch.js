let tree = [];
let i = 0;

let leaves = [];


function setup() {
  createCanvas(windowWidth-10, windowHeight-40);
  let a = createVector(width/2, height);
  let b = createVector(width/2, height - 100);
  let root = new Branch(a, b);
  console.log("SKETCH");
  tree[0] = root;
  
  
}

let count = 0;

function mousePressed(){

  console.log("presseds");
  for(i = tree.length-1; i >= 0; i--){
    if(!tree[i].finished){
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
  count++;

  if(count >= 5){
    for(i=0; i<tree.length; i++){
      // let check = rand(0,1);
      if(!tree[i].finished){
        let leaf = tree[i].end.copy();
        // if(rand() > 0.5){
          leaves.push(leaf);
        // }
        
      }
    }
  }
  // tree[tree.length+1] = tree[tree.length].branchA();
  // tree[tree.length+2] = tree[tree.length].branchB();
}

function draw() {
  background(50);

  // console.log(random() * (PI/4));

  for(let i = 0; i < tree.length; i++){
    tree[i].show();
    tree[i].jitter();
  }

  for(let i = 0; i < leaves.length; i++){
    fill(255, 0 ,100, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    let rand = random(0,2);
    if(rand >= 1 && leaves[i].y <= height-4){
      leaves[i].y += rand;
      tree[i].decided = 1;
    }
    
    // tree[i].show();
    // tree[i].jitter();
  }
  
  


}

