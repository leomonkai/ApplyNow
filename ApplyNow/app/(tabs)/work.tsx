import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Thanh tìm kiếm */}
      <TextInput
        style={styles.searchBar}
        placeholder="Tìm kiếm..."
        placeholderTextColor="#999"
      />
      
      
      
      {/* Nội dung trong ScrollView */}
      <ScrollView style={styles.content}>
            {/* Tiêu đề */}
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Gợi ý việc làm phù hợp</Text>
            <Text style={styles.linkText}>Xem tất cả</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.contentText}>Công việc 1</Text>
            <Text style={styles.descriptionText}>Mô tả 1</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.contentText}>Công việc 2</Text>
            <Text style={styles.descriptionText}>Mô tả 2</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.contentText}>Công việc 3</Text>
            <Text style={styles.descriptionText}>Mô tả 3</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.contentText}>Công việc 4</Text>
            <Text style={styles.descriptionText}>Mô tả 4</Text>
          </View>
        </View>
        {/* Tiêu đề */}
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Top công ty</Text>
            <Text style={styles.linkText}>Xem tất cả</Text>
        </View>
      </ScrollView>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row', // Đặt các thành phần trong container nằm ngang
    justifyContent: 'space-between', // Đẩy các thành phần ra hai bên
    alignItems: 'center', // Căn giữa theo chiều dọc
    marginBottom: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  linkText: {
    fontSize: 16,
    color: '#1e90ff', // Màu cho liên kết
  },
  searchBar: {
    height: 40,
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#fff',
    backgroundColor: '#333',
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row', // Đặt hình ảnh và văn bản nằm ngang
    alignItems: 'flex-start', // Căn trên cùng
    marginBottom: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1, // Đảm bảo container văn bản chiếm phần còn lại
    justifyContent: 'center', // Căn giữa theo chiều dọc
  },
  contentText: {
    fontSize: 16,
    color: '#fff',
  },
  descriptionText: {
    fontSize: 14,
    color: '#aaa',
  },
});
