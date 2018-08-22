// module.exports ={
//     postFreq: function(posts) {
//         let freq = {};
//         let data = [];
//         let filler = ["a", "is", "the", "am", "of", "for", "in"];
//         for (let i = 0, i < posts.length, i++) {
//             let post = posts[i].text;
//             for (let j = 0, j < post.length, j++) {
//                 let word = post[j];
//                 if (!filler.includes(word)) {
//                     freq[word] = freq[word] || 0;
//                     freq[word]++;
//                 }
//             }
//         }
//         for (let k = 0, k < Object.keys(freq), k++) {
//             let keys = Object.keys(freq);
//             data.push({
//                 name: keys[k],
//                 value: freq[keys[k]]
//             })
//         }
//         console.log(data);
//         return data;
//     }

// };

export const postFreq = function(posts) {
        let freq = {};
        let data = [];
        let filler = ["a", "is", "the", "am", "of", "for", "in"];
        for (let i = 0, i < posts.length, i++) {
            let post = posts[i].text;
            for (let j = 0, j < post.length, j++) {
                let word = post[j];
                if (!filler.includes(word)) {
                    freq[word] = freq[word] || 0;
                    freq[word]++;
                }
            }
        }
        for (let k = 0, k < Object.keys(freq), k++) {
            let keys = Object.keys(freq);
            data.push({
                name: keys[k],
                value: freq[keys[k]]
            })
        }
        console.log(data);
        return data;
    };