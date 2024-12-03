import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// Dữ liệu cho 국민행동요령
const DATA = [
{
    id: "1",
    title: "화재대비 행동요령",
    content: `화재대비\n\n✅ 안전을 위한 사전 점검과 대비훈련을 해야 합니다.\n\n① 사전점검\n✔ 눈으로는 사용하지 않는 전열기구 코드 확인, 가스레인지 중간밸브 잠금확인\n✔ 귀로는 평소에 나지 않던 이상한 소리 확인\n✔ 코로는 타는 냄새 확인\n✔ 손으로는 만져보거나 두들겨 보거나\n✔ 행동으로는 조리중에는 자리를 비우지 않습니다. 난방기구 등 전열기구 사용시 주변에 탈 수 있는 물건을 두지 않습니다.\n\n② 대피훈련\n✔ 무엇을 해야 하는지 알고 신속히 움직인다면 소중한 인명과 재산을 보호할 수 있습니다.\n\n◎ 챙겨야할 내용 Tip\n- 대피 방법과 대피해서 만나는 장소 사전약속\n- 대피할 때 가져가야할 중요물건 목록작성과 챙길 사람 선정\n- 비상연락 전화번호 및 연락해야 할 대상 선정\n- 문틈을 막아야할 경우 청태이프 또는 수건\n- 외부 대피 시 사용할 수건 등 대피에 사용할 물건\n- 긴급 대피한 경우 만날 장소와 비상연락망\n\n☞ 옥상출입문은 항상 열려있는지, 자동개폐장치가 설치되어 있는지 확인합니다.\n☞ 방문을 닫아두면 불과 연기가 퍼지는 속도를 늦출 수 있습니다.`,
  },
  {
    id: "2",
    title: "화재대처 행동요령",
    content: "화재대처\n\n✅ 화재 경보가 울릴때\n- 비상소집\n- 대피방법 결정\n- 신속히 대피\n- 119로 신고\n- 대피 후 인원 확인 등.",
  },
  { id: "3", 
  title: "화재진압 행동요령", 
  content: "화재진압\n\n소화기 사용법\n\n1)안전핀을 뽑는다.\n 2)노즐을 잡고 불쪽을 향한다.\n3)손잡이를 꽉 움켜쥔다.\n 4)분말을 골고루 쏜다.\n\n☞ 실내에서 사용할 때는 밖으로 대피 할 때를 대비하여 문을 등지고 사용하세요.\n1) 소화기를 가져와서 몸통을 단단히 잡고 안전핀을 뽑는다.\n2) 노즐을 잡고 불쪽을 향해 가까이 이동한다.\n3) 손잡이를 꽉 움켜쥔다.\n4) 분말이 골고루 불을 덮을 수 있도록 쏩니다.\n\n소화전 사용법1)문을 연다.\n 2)호스를 빼고 노즐을 잡는다.\n3)밸브를 돌린다.\n 4)불을 향해 쏜다.\n\n☞ 2인 1조로 사용할 경우.\n1) 2명중 1명이 먼저 소화전함의 문을 열고 호스와 노즐이 연결되어 있는지 확인한 후\n2) 호스를 밖으로 꼬이지 않도록 불이 난 곳까지 길게 늘어뜨린 후 노즐(관창)을 잡고 방수자세를 취한다.\n3) 다른 한사람이 밸브를 돌려 물이 나오는 것을 확인 한 후 뛰어가서 호스를 잡는 것을 도와줍니다.\n4) 노즐의 끝을 돌려 물의 양을 조절해가며 불을 끕니다.\n\n옷에 불이 붙었을 때\n1)멈춘다 \n2)눈과 코와 입보호\n3)엎드린다 \n4)뒹군다\n\n☞ 얼굴 화상방지와 연기가 폐로 들어가지 않도록\n1) 옷에 불이 붙었을 때는 하던 일을 멈추고\n2) 얼굴(눈,코,입)에 화상을 입지 않도록 두 손으로 감싸도록 합니다.\n3) 바닥에 엎드린 후\n4) 몸을 뒹굴어서 불이 꺼지도록 합니다.." },
  { id: "4", 
  title: "소방관이 전하는 안전상식", 
  content: "소방관이 전하는 안전상식\n\n119 신고절차\n본인의 위치(주소) ▶ 현재상황 ▶ 부상여부 ▶ 상황요원 안내에 따라 행동\n\n☞ 일반전화\n1) 수화기를 들어 발신을 확인\n2) 순서대로 119숫자 누르기\n3) 소방대원의 질문에 대답\n\n☞ 휴대전화\n1) 119숫자 누르기\n2) 소방대원의 질문에 대답\n\n☞ 인터넷\n1) 인터넷 접속(www.119.go.kr)\n2) 신고하기 버튼 누르기\n3) 성명 등 필수인적사항 기록\n4) 사고개요 정확히 기록\n5) 등록여부 확인\n\n☞ 공중전화\n1) 수화기들기\n2) 긴급버튼(적색)누르기\n3) 119숫자 누르기\n4) 소방대원의 질문에 대답\n\n연기를 피해 대피하는 자세\n1)손수건,옷 등을 이용하여 호흡기(코와 입)보호한다.\n 2)자세를 낮춘다.\n3)다른 손으로는 벽을 짚는다.\n 4)한 방향으로 신속하게 밖으로 대피한다.\n\n☞ 대류현상에 따라 뜨거운 연기는 천장으로 올라가고 차가운 공기는 아래로 내려옵니다.\n\n4분의 기적, 심폐소생술\n1)반응확인\n 2)119신고 및 AED요청\n3)가슴 압박 30회 \n4)인공호흡 2회\n\n☞ 심폐소생술은 외우기 쉽도록 4단계 절차로 기억합니다.\n\n알아둡시다! 은연중에 나를 지켜주고 있는 소방시설\n1)제연설비 \n2)화재감지기\n3)스프링쿨러 \n4)주방용자동소화기\n" },
  { id: "5", 
  title: "소화기 사용법", 
  content: "분말소화기 사용방법\n\n소화기를 불이 난 곳으로 옮긴 후 손잡이 부분의 봉인 줄을 제거하고 안전핀을 뽑습니다.\n바람을 등지고 서서 노즐을 빼서 잡고 불쪽으로 향하게 합니다.\n가까이 접근하여 손잡이를 힘껏 움켜쥡니다.\n빗자루로 쓸 듯이 분말(소화약제)을 골고루 쏩니다.\n안전핀을 뽑는다.(Pull pin)\n소화기의 안전핀을 뽑는 그림\n노즐을 잡고 불쪽을 향한다(Aim at base of fire)\n소화기의 호스 잡는 법을 설명하는 그림\n손잡이를 움켜쥔다(Squeeze handle)\n소화기의 손잡이를 잡는 방법을 설명하는 그림\n분말을 골고루 쏜다(Sweep side to side)\n" },
  { id: "6", 
  title: "아파트(공동주택) 화재 발생 시 행동요령", 
  content: "아파트(공동주택)화재 발생 시 행동요령\n\n(자기집 화재 시)대피가 가능한 경우\n1. 화재 사실을 집에 있는 사람에게 알린다.\n2. 계단을 이용해 낮은 자세로 지상층, 옥상 등 안전한 장소로 대피한다.\n3. 대피 시 출입문은 반드시 닫고, 엘리베이터를 타지 않는다.\n4. 비상벨을 누르고 119에 신고한다.\n\n(자기집 화재 시)현관 입구 등의 화재로 대피가 어려운 경우\n1. 화재 사실을 집에 있는 사람에게 알린다.\n2. 대피공간, 경량칸막이, 하향식피난구 등이 설치된 곳으로 이동하여 대피한다.\n3. 대피공간 등이 없는 경우 화염·연기로부터 멀리 이동해 문을 닫고, 젖은 수건 등으로 틈새를 막는다.\n4. 119로 현재 위치, 상황을 알리고 구조를 요청한다.\n\n(다른 곳* 화재 시)자기 집으로 화염·연기가 들어오지 않는 경우\n* 다른 곳 : 아파트의 다른 세대, 복도, 계단실 엘리베이터홀, 주차장 등\n1. 화재 사실을 집에 있는 사람에게 알린다.\n2. 세대 내에서 대기하며 화재 상황을 주시한다.\n3. 연기가 들어오지 못하게 창문을 닫는다.\n4. 119로 신고하고 안내방송에 따라 행동한다.\n(다른 곳* 화재 시)자기 집으로 화염·연기가 들어오는 경우\n\n* 다른 곳 : 아파트의 다른 세대, 복도, 계단실 엘리베이터홀, 주차장 등\n1. 화재 사실을 집에 있는 사람에게 알린다.\n2. 복도, 계단에 화염·연기가 없어 대피가 가능한 경우\n☞ 계단을 이용하여 낮은 자세로 지상층, 옥상 등 안전한 장소로 대피한다.\n☞ 대피 시 출입문은 반드시 닫고, 엘리베이터를 타지 않는다.\n3. 복도, 계단에 화염·연기가 있어 대피가 어려운 경우\n☞ 대피공간, 경량칸막이, 하향식피난구 등이 설치된 곳으로 이동하여 대피한다.\n☞ 대피공간 등이 없는 경우 화염 또는 연기로부터 멀리 이동하여, 문을 닫고 젖은 수건 등으로 틈새를 막는다.\n☞ 119에 현재 위치, 상황을 알리고 구조를 요청한다.\n" },
];

// Màn hình danh sách
function ListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("Detail", { title: item.title, content: item.content })}
    >
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>화재 안내</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

// Màn hình chi tiết
function DetailScreen({ route }) {
  const { title, content } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.detailTitle}>{title}</Text>
      <Text style={styles.detailContent}>{content}</Text>
    </ScrollView>
  );
}

// Stack Navigator cho 국민행동요령
const Stack = createStackNavigator();

export default function GuideScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

// CSS Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B3E5FC",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#007AFF",
    textAlign: "center",
    padding: 15,
  },
  list: {
    padding: 10,
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 20,
    textAlign: "center",
  },
  detailContent: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    paddingHorizontal: 20,
  },
});