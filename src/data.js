const app = {
  userLoginValidate: (user, password) => {
    let msg = '';
    if (user !== '' && password !== '') {
      if (user === 'LABORATORIA' && password === 'LABORATORIA') {
        msg = 'ok';
      } else {
        msg = 'Usuario o contraseña incorrectas';
      }
    } else {
      if (user === '') {
        msg = 'Ingrese el usuario';
      } else {
        msg = 'Ingrese la contraseña';
      }
    }
    return msg;
  },

  replaceChampsImg: (data, character) => {
    const arrDataCurated = Object.values(data); 
    for (let i = 0; i < arrDataCurated.length; i++) {
      if (character.hasOwnProperty(arrDataCurated[i].id)) { 
        arrDataCurated[i].splash = championsImg[arrDataCurated[i].id]; 
      }
    } return arrDataCurated;
  },

  selectedData: (data) => {
    const arrSelectedData = [];
    for (let i = 0; i < data.length; i++) {
      arrSelectedData.push(
        {
          name: data[i].name,
          aka: data[i].title,
          id: data[i].id,
          icon: data[i].img,
          img: data[i].splash,
          attack: data[i].info.attack,
          magic: data[i].info.magic,
          defense: data[i].info.defense,
          difficulty: data[i].info.difficulty,
          helpPoints: data[i].stats.hp,
          helpPointsPerLevel: data[i].stats.hpperlevel,
          hpRegen: data[i].stats.hpregen,
          hpRegenPerLevel: data[i].stats.hpregenperlevel,
          mana: data[i].stats.mp,
          manaPerLevel: data[i].stats.mpperlevel,
          movespeed: data[i].stats.movespeed,
          attackrange: data[i].stats.attackrange,
          attackdamage: data[i].stats.attackdamage,
          tags: data[i].tags
        });
    };
    return arrSelectedData;
  },

  sortNameAttackdamage: (data, clickOrder, sortAttribute) => {
    const arrSortsortAttribute = data.slice().sort((ab, bc) => {
      return ab[sortAttribute] > bc[sortAttribute] ? 1 : bc[sortAttribute] > ab[sortAttribute] ? -1 : 0;
    });
    if (clickOrder === '0') {
      return arrSortsortAttribute;
    } else {
      return arrSortsortAttribute.reverse();
    }
  },

  selectTypeChampions: (data, type) => {
    const filterTypeChamp = data.filter((obj) => {
      let currentType = [];
      if (type !== 'Total') {
        for (let i = 0; i < obj.tags.length; i++) {
          if (obj.tags[i] === type) {
            currentType.push(obj.tags[i]);
            return currentType; 
          }
        }
      } else {
        return data;
      }
    });
    return filterTypeChamp;
  },
  
};
window.app = app;

