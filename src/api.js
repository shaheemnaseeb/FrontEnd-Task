export async function getAllPoints() {
    try{
        const response = await fetch('http://localhost:3000/points');
        return response.json();
    }catch(error) {
        return [];
    }
}

export async function getCurve(id) {
    try{
        const response = await fetch('http://localhost:3000/curves/' + id);
        return response.json();
    }catch(error) {
        return [];
    }
}