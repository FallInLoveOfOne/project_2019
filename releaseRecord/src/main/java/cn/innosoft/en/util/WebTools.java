package cn.innosoft.en.util;

import java.awt.Desktop;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.Rectangle;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.event.KeyEvent;
import java.awt.image.BufferedImage;
import java.io.File;
import java.net.URL;

import javax.imageio.ImageIO;

public class WebTools {
		public static void main(String[] args) throws Exception {  
			//此方法仅适用于JdK1.6及以上版本  
			Desktop.getDesktop().browse(  
			        new URL("http://google.com/intl/en/").toURI());  
			Robot robot = new Robot();  
			robot.delay(10000);  
			Dimension d = new Dimension(Toolkit.getDefaultToolkit().getScreenSize());  
			int width = (int) d.getWidth();  
			int height = (int) d.getHeight();  
			//最大化浏览器  
			robot.keyRelease(KeyEvent.VK_F11);  
			robot.delay(2000);  
			Image image = robot.createScreenCapture(new Rectangle(0, 0, width,  
			        height));  
			BufferedImage bi = new BufferedImage(width, height,  
			        BufferedImage.TYPE_INT_RGB);  
			Graphics g = bi.createGraphics();  
			g.drawImage(image, 0, 0, width, height, null);  
			//保存图片  
			ImageIO.write(bi, "jpg", new File("report.jpg"));  
	}  
}