// Oppgave 1

// import { View, Text, StyleSheet, Button } from 'react-native';

// export default function Oppgave1() {
//   return (
//     <View style={styles.container}>


//       <View style={styles.header}>
//         <Text style={styles.headerText}>En app</Text>
//       </View>


//       <View style={styles.boxRow}>
//         <View style={[styles.box, { backgroundColor: 'green' }]} />
//         <View style={[styles.box, { backgroundColor: 'yellow' }]} />
//         <View style={[styles.box, { backgroundColor: 'black' }]} />
//       </View>


//       <Text style={styles.midText}>Tekst som er uten mening!</Text>


//       <View style={styles.buttonContainer}>
//         <Button title="OK" onPress={() => {}} />
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },

//   header: {
//     backgroundColor: 'red',
//     paddingVertical: 20,
//     alignItems: 'center',
//   },

//   headerText: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },

//   boxRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 40,
//     paddingHorizontal: 20,
//   },

//   box: {
//     width: 70,
//     height: 70,
//   },

//   midText: {
//     textAlign: 'center',
//     marginTop: 40,
//     fontSize: 18,
//   },

//   buttonContainer: {
//     marginTop: 60,
//     alignItems: 'center',
//   },
// });














// Oppgave 2



// import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';

// export default function Oppgave2() {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>


//       <Text style={styles.title}>Lokalt bilde:</Text>
//       <Image
//         source={require('../../assets/images/katt.png')}
//         style={styles.image}
//       />


//       <Image
//         source={{ uri: 'https://w.wallhaven.cc/full/4y/wallhaven-4y3l6l.jpg' }}
//         style={styles.image}
//       />

//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     alignItems: 'center',
//     gap: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   image: {
//     width: 300,
//     height: 200,
//     borderRadius: 10,
//     backgroundColor: '#ccc',
//   },
// });
















// Oppgave 3

// import { useState } from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';

// export default function Oppgave3() {
//   const [passord, setPassord] = useState('');

//   return (
//     <View style={styles.container}>


//       <View style={styles.header}>
//         <Text style={styles.headerText}>Passord</Text>
//       </View>


//       <Text style={styles.label}>Skriv inn passordet ditt:</Text>


//       <TextInput
//         style={styles.input}
//         value={passord}
//         onChangeText={setPassord}
//         placeholder="Skriv passord her"
//         secureTextEntry
//       />

//       <Text style={styles.label}>Passordet ditt er:</Text>
//       <Text style={styles.output}>{passord}</Text>

//       {passord.length < 5 && (
//         <Text style={styles.warning}>Passordet må minst ha 5 tegn</Text>
//       )}

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     gap: 20,
//      marginTop: 50,
//   },
//   header: {
//     backgroundColor: '#373F51',
//     paddingVertical: 20,
//     alignItems: 'center',
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#999',
//     padding: 10,
//     borderRadius: 8,
//     fontSize: 18,
//   },
//   output: {
//     fontSize: 18,
//     marginTop: -10,
//   },
//   warning: {
//     fontSize: 16,
//     color: 'black',
//     marginTop: 10,
//   },
// });












// Oppgave 4


// import { useState } from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';

// export default function Oppgave4() {
//   const [teller, setTeller] = useState(0);

//   function økTeller() {
//     setTeller(teller + 1);
//   }

//   function reduserTeller() {
//     if (teller > 0) {
//       setTeller(teller - 1);
//     }
//   }

//   return (
//     <View style={styles.container}>


//       <Pressable style={styles.knapp} onPress={økTeller}>
//         <Text style={styles.knappTekst}>Øk teller</Text>
//       </Pressable>


//       <Pressable
//         style={[styles.knapp, { backgroundColor: '#487281' }]}
//         onPress={reduserTeller}
//       >
//         <Text style={[styles.knappTekst, { color: 'white' }]}>Reduser teller</Text>
//       </Pressable>


//       <View style={styles.tellerBox}>
//         <Text style={styles.tellerText}>Teller er: {teller}</Text>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 30,
//     gap: 20,
//      marginTop: 50,
//   },
//   knapp: {
//     backgroundColor: '#487281',
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   knappTekst: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   tellerBox: {
//     marginTop: 30,
//     padding: 20,
//     backgroundColor: '#EEE',
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   tellerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });












// Oppgave 5


// import { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

// export default function Oppgave5() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [temp, setTemp] = useState(null);
//   const [condition, setCondition] = useState('');

//   async function fetchWeather() {
//     if (!city) return;

//     try {

//       const geoRes = await fetch(
//         `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
//       );
//       const geoData = await geoRes.json();

//       if (!geoData.results || geoData.results.length === 0) {
//         setWeather(null);
//         setTemp(null);
//         setCondition('Fant ikke sted');
//         return;
//       }

//       const { latitude, longitude, name } = geoData.results[0];


//       const weatherRes = await fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
//       );



//       const weatherData = await weatherRes.json();

//       const w = weatherData.current_weather;

//       setWeather(name);
//       setTemp(w.temperature);
//       setCondition(weatherCodeToText(w.weathercode));
//     } catch (error) {
//       setCondition('Feil ved henting av vær');
//     }
//   }


//   function weatherCodeToText(code) {
//     if (code === 0) return 'Clear';
//     if (code === 1 || code === 2) return 'Partly cloudy';
//     if (code === 3) return 'Cloudy';
//     if (code === 51 || code === 61 || code === 80) return 'Showers';
//     return 'Unknown';
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Vær app</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Søk etter by"
//         value={city}
//         onChangeText={setCity}
//         onSubmitEditing={fetchWeather}
//       />

//       {weather && (
//         <View style={styles.resultBox}>
//           <Text style={styles.city}>{weather}</Text>
//           <Text style={styles.condition}>{condition}</Text>

//           <Text
//             style={[
//               styles.temp,
//               temp < 0 && { color: 'red' } 
//             ]}
//           >
//             {temp}°
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 30,
//     gap: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#999',
//     padding: 12,
//     borderRadius: 8,
//     fontSize: 18,
//   },
//   resultBox: {
//     marginTop: 30,
//     alignItems: 'center',
//     gap: 10,
//   },
//   city: {
//     fontSize: 26,
//     fontWeight: 'bold',
//   },
//   condition: {
//     fontSize: 20,
//   },
//   temp: {
//     fontSize: 50,
//     fontWeight: 'bold',
//   },
// });











// Oppgave 6

// import { useState, useEffect } from 'react';
// import { View, Text, TextInput, StyleSheet, Switch } from 'react-native';

// export default function Oppgave6() {
//   const [length, setLength] = useState('12');
//   const [includeUpper, setIncludeUpper] = useState(true);
//   const [includeLower, setIncludeLower] = useState(true);
//   const [includeNumbers, setIncludeNumbers] = useState(true);
//   const [includeSpecial, setIncludeSpecial] = useState(true);

//   const [minSpecial, setMinSpecial] = useState('1');
//   const [password, setPassword] = useState('');


//   function countSpecialChars(pwd: string) {
//     const specialRegex = /[^A-Za-z0-9]/g;
//     const matches = pwd.match(specialRegex);
//     return matches ? matches.length : 0;
//   }


//   function generatePassword() {
//     let chars = '';
//     if (includeLower) chars += 'abcdefghijklmnopqrstuvwxyz';
//     if (includeUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if (includeNumbers) chars += '0123456789';
//     if (includeSpecial) chars += '!@#$%^&*()_+-=[]{};:,.<>/?';

//     if (chars.length === 0) return '';

//     let newPass = '';
//     const len = Number(length);

//     for (let i = 0; i < len; i++) {
//       newPass += chars.charAt(Math.floor(Math.random() * chars.length));
//     }

//     return newPass;
//   }


//   function validateOrRegenerate() {
//     if (!password) return;

//     const specials = countSpecialChars(password);
//     const required = Number(minSpecial);

//     if (specials < required) {
//       setPassword(generatePassword());
//     }
//   }


//   useEffect(() => {
//     setPassword(generatePassword());
//   }, []);


//   useEffect(() => {
//     validateOrRegenerate();
//   }, [minSpecial, includeSpecial]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Passordgenerator</Text>

//       {/* Lengde */}
//       <TextInput
//         style={styles.input}
//         placeholder="Lengde"
//         keyboardType="numeric"
//         value={length}
//         onChangeText={setLength}
//         onSubmitEditing={() => setPassword(generatePassword())}
//       />

//       {/* Store bokstaver */}
//       <View style={styles.row}>
//         <Text style={styles.label}>Store bokstaver</Text>
//         <Switch value={includeUpper} onValueChange={setIncludeUpper} />
//       </View>

//       {/* Små bokstaver */}
//       <View style={styles.row}>
//         <Text style={styles.label}>Små bokstaver</Text>
//         <Switch value={includeLower} onValueChange={setIncludeLower} />
//       </View>

//       {/* Tall */}
//       <View style={styles.row}>
//         <Text style={styles.label}>Tall</Text>
//         <Switch value={includeNumbers} onValueChange={setIncludeNumbers} />
//       </View>

//       {/* Spesialtegn */}
//       <View style={styles.row}>
//         <Text style={styles.label}>Spesialtegn</Text>
//         <Switch value={includeSpecial} onValueChange={setIncludeSpecial} />
//       </View>

//       {/* Minimum spesialtegn */}
//       <TextInput
//         style={styles.input}
//         placeholder="Minimum spesialtegn"
//         keyboardType="numeric"
//         value={minSpecial}
//         onChangeText={setMinSpecial}
//       />

//       {/* Generert passord */}
//       <Text style={styles.label}>Passord:</Text>
//       <View style={styles.passwordBox}>
//         <Text style={styles.password}>{password}</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 30,
//     gap: 20,
//     marginTop: 50,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#999',
//     padding: 12,
//     borderRadius: 8,
//     fontSize: 18,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   passwordBox: {
//     marginTop: 10,
//     padding: 12,
//     backgroundColor: '#eee',
//     borderRadius: 8,
//   },
//   password: {
//     fontSize: 22,
//     fontFamily: 'monospace',
//   },
// });


















// Oppgave 7



// import { useState, useEffect } from 'react';
// import { View, Text, TextInput, StyleSheet, Button, FlatList, Pressable } from 'react-native';

// export default function Oppgave7() {
//   const [taskName, setTaskName] = useState('');
//   const [tasks, setTasks] = useState<
//     { id: string; name: string; elapsedMs: number; isRunning: boolean }[]
//   >([]);


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTasks((prev) =>
//         prev.map((t) =>
//           t.isRunning
//             ? { ...t, elapsedMs: t.elapsedMs + 100 }
//             : t
//         )
//       );
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   function formatTime(ms: number) {
//     const totalSeconds = Math.floor(ms / 1000);
//     const minutes = Math.floor(totalSeconds / 60);
//     const seconds = totalSeconds % 60;
//     const millis = Math.floor((ms % 1000) / 100);

//     return `${minutes.toString().padStart(2, '0')}:${seconds
//       .toString()
//       .padStart(2, '0')}.${millis}`;
//   }

//   function addTask() {
//     if (!taskName) return;

//     setTasks((prev) => [
//       ...prev,
//       {
//         id: String(prev.length + 1),
//         name: taskName,
//         elapsedMs: 0,
//         isRunning: false,
//       },
//     ]);

//     setTaskName('');
//   }

//   function startTask(id: string) {
//     setTasks((prev) =>
//       prev.map((t) =>
//         t.id === id ? { ...t, isRunning: true } : t
//       )
//     );
//   }

//   function stopTask(id: string) {
//     setTasks((prev) =>
//       prev.map((t) =>
//         t.id === id ? { ...t, isRunning: false } : t
//       )
//     );
//   }

//   function deleteTask(id: string) {
//     setTasks((prev) => prev.filter((t) => t.id !== id));
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tidsmåler</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Legg til gjøremål"
//         value={taskName}
//         onChangeText={setTaskName}
//       />

//       <Button title="Legg til" onPress={addTask} />

//       <FlatList
//         data={tasks}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={{ gap: 15, marginTop: 20 }}
//         renderItem={({ item }) => (
//           <View style={styles.taskBox}>
//             <View style={{ flex: 1 }}>
//               <Text style={styles.taskName}>{item.name}</Text>
//               <Text style={styles.timer}>{formatTime(item.elapsedMs)}</Text>
//             </View>

//             <View style={styles.buttons}>
//               {!item.isRunning ? (
//                 <Pressable
//                   style={[styles.btn, styles.startBtn]}
//                   onPress={() => startTask(item.id)}
//                 >
//                   <Text style={styles.btnText}>Start</Text>
//                 </Pressable>
//               ) : (
//                 <Pressable
//                   style={[styles.btn, styles.stopBtn]}
//                   onPress={() => stopTask(item.id)}
//                 >
//                   <Text style={styles.btnText}>Stopp</Text>
//                 </Pressable>
//               )}

//               <Pressable
//                 style={[styles.btn, styles.deleteBtn]}
//                 onPress={() => deleteTask(item.id)}
//               >
//                 <Text style={styles.btnText}>Slett</Text>
//               </Pressable>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 30,
//     gap: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#999',
//     padding: 12,
//     borderRadius: 8,
//     fontSize: 18,
//   },
//   taskBox: {
//     padding: 15,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 15,
//   },
//   taskName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   timer: {
//     fontSize: 24,
//     marginTop: 5,
//   },
//   buttons: {
//     flexDirection: 'row',
//     gap: 10,
//   },
//   btn: {
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//   },
//   startBtn: {
//     backgroundColor: '#4CAF50',
//   },
//   stopBtn: {
//     backgroundColor: '#FF9800',
//   },
//   deleteBtn: {
//     backgroundColor: '#F44336',
//   },
//   btnText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });




// Oppgave 8

// import { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   Image,
//   ScrollView,
// } from 'react-native';

// export default function ExploreScreen() {
//   const [valgtKategori, setValgtKategori] = useState<string | null>(null);
//   const [handlekurv, setHandlekurv] = useState<any[]>([]);
//   const [visHandlekurv, setVisHandlekurv] = useState(false);

//   const kategorier = ['Treningsutstyr', 'Turutstyr', 'Solbriller'];

//   const produkter = [
//     {
//       id: 1,
//       navn: 'Manualer 10kg',
//       kategori: 'Treningsutstyr',
//       pris: 499,
//       bilde: 'https://www.24hshop.no/pub_images/original/130118.jpg',
//     },
//     {
//       id: 2,
//       navn: 'Tursekk 45L',
//       kategori: 'Turutstyr',
//       pris: 899,
//       bilde:
//         'https://images.prisradar.no/uploads/images/product_image/big/71/ZT6sSYiOXdhlLi8FScaHFFDFx0JuuqytxpmfVZ0P5kcuabsbucHLRKgPTJzD9K.jpg',
//     },
//     {
//       id: 3,
//       navn: 'Sport solbriller',
//       kategori: 'Solbriller',
//       pris: 299,
//       bilde:
//         'https://cdn.xxl.no/filespin/d31075dc27814b2aaf8f5a47615ef3dc?quality=75&bgcolor=efefef&resize=3840,3840',
//     },
//   ];

//   function leggIHandlekurv(produkt: any) {
//     setHandlekurv((prev) => [...prev, produkt]);
//   }

//   const filtrerteProdukter = valgtKategori
//     ? produkter.filter((p) => p.kategori === valgtKategori)
//     : [];

//   const totalPris = handlekurv.reduce((sum, p) => sum + p.pris, 0);

//   return (
//     <ScrollView contentContainerStyle={styles.page}>
//       {!visHandlekurv && !valgtKategori && (
//         <View style={styles.section}>
//           <Text style={styles.title}>Butikk app</Text>
//           <Text style={styles.text}>Butikk</Text>

//           {kategorier.map((kat) => (
//             <Pressable
//               key={kat}
//               style={styles.kategoriKnapp}
//               onPress={() => setValgtKategori(kat)}
//             >
//               <Text style={styles.kategoriTekst}>{kat}</Text>
//             </Pressable>
//           ))}

//           <Pressable
//             style={styles.handlekurvKnapp}
//             onPress={() => setVisHandlekurv(true)}
//           >
//             <Text style={styles.handlekurvTekst}>Se handlekurv</Text>
//           </Pressable>
//         </View>
//       )}

//       {!visHandlekurv && valgtKategori && (
//         <View style={styles.section}>
//           <Text style={styles.title}>{valgtKategori}</Text>

//           <View style={styles.produktWrapper}>
//             {filtrerteProdukter.map((p) => (
//               <View key={p.id} style={styles.produktCard}>
//                 <Image source={{ uri: p.bilde }} style={styles.bilde} />

//                 <Text style={styles.produktNavn}>{p.navn}</Text>
//                 <Text style={styles.produktPris}>{p.pris} kr</Text>

//                 <Pressable
//                   style={styles.bestillKnapp}
//                   onPress={() => leggIHandlekurv(p)}
//                 >
//                   <Text style={styles.bestillTekst}>Legg i handlekurv</Text>
//                 </Pressable>
//               </View>
//             ))}
//           </View>

//           <Pressable
//             style={styles.tilbakeKnapp}
//             onPress={() => setValgtKategori(null)}
//           >
//             <Text style={styles.tilbakeTekst}>Tilbake til kategorier</Text>
//           </Pressable>
//         </View>
//       )}

//       {visHandlekurv && (
//         <View style={styles.section}>
//           <Text style={styles.title}>Handlekurv</Text>

//           {handlekurv.length === 0 ? (
//             <Text style={styles.text}>Handlekurven er tom.</Text>
//           ) : (
//             handlekurv.map((p, index) => (
//               <View key={index} style={styles.kurvRad}>
//                 <Text style={styles.kurvTekst}>
//                   {p.navn} – {p.pris} kr
//                 </Text>
//               </View>
//             ))
//           )}

//           <Text style={styles.totalTekst}>Totalpris: {totalPris} kr</Text>

//           <Pressable
//             style={styles.tilbakeKnapp}
//             onPress={() => setVisHandlekurv(false)}
//           >
//             <Text style={styles.tilbakeTekst}>Tilbake</Text>
//           </Pressable>
//         </View>
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   page: { padding: 20, gap: 30 },
//   section: { gap: 20 },
//   title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center' },
//   text: { fontSize: 16, textAlign: 'center' },

//   kategoriKnapp: {
//     backgroundColor: '#487281',
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   kategoriTekst: { color: 'white', fontSize: 18, textAlign: 'center' },

//   handlekurvKnapp: {
//     backgroundColor: '#373F51',
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   handlekurvTekst: { color: 'white', fontSize: 18, textAlign: 'center' },


//   produktWrapper: {
//     alignItems: 'center',
//   },

//   produktCard: {
//     width: '65%',           
//     backgroundColor: '#D8DBE2',
//     borderRadius: 10,
//     padding: 15,
//     alignItems: 'center',
//     alignSelf: 'center',
//   },

//   bilde: {
//     width: '100%',
//     height: undefined,
//     aspectRatio: 1.2,       
//     borderRadius: 10,
//     resizeMode: 'cover',
//   },

//   produktNavn: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
//   produktPris: { fontSize: 16, marginTop: 5 },

//   bestillKnapp: {
//     backgroundColor: '#487281',
//     paddingVertical: 10,
//     borderRadius: 8,
//     marginTop: 10,
//     width: '100%',          
//   },
//   bestillTekst: { color: 'white', fontSize: 16, textAlign: 'center' },

//   tilbakeKnapp: {
//     backgroundColor: '#ccc',
//     paddingVertical: 10,
//     borderRadius: 8,
//     alignSelf: 'center',
//     width: '65%',            
//   },
//   tilbakeTekst: { fontSize: 16, textAlign: 'center' },

//   kurvRad: { paddingVertical: 5 },
//   kurvTekst: { fontSize: 16 },
//   totalTekst: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
// });


