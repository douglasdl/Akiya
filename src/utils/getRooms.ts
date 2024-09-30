interface FloorPlan {
  rooms: number;
  dining: number;
  kitchen: number;
  livingRoom: number;
}

export function parseFloorPlan(floorPlan: string): FloorPlan {
  // Initialize with default values
  let rooms = 0;
  let dining = 0;
  let kitchen = 0;
  let livingRoom = 0;

  // If the floorPlan is '-', return default values
  if (floorPlan === '-') {
    return { rooms, dining, kitchen, livingRoom };
  }

  // Extract the number of rooms
  const match = floorPlan.match(/^(\d+)([LDK]*)$/);
  
  if (match) {
    rooms = parseInt(match[1], 10); // Get the number of rooms

    // Check for L, D, K in the remaining part of the string
    const features = match[2];
    livingRoom = features.includes('L') ? 1 : 0;
    dining = features.includes('D') ? 1 : 0;
    kitchen = features.includes('K') ? 1 : 0;
  }

  return { rooms, dining, kitchen, livingRoom };
}

// Example usage
// const floorPlan1 = '3LDK';
// const result1 = parseFloorPlan(floorPlan1);
// console.log(result1); // { rooms: 3, dining: 1, kitchen: 1, livingRoom: 1 }

// const floorPlan2 = '-';
// const result2 = parseFloorPlan(floorPlan2);
// console.log(result2); // { rooms: 0, dining: 0, kitchen: 0, livingRoom: 0 }
