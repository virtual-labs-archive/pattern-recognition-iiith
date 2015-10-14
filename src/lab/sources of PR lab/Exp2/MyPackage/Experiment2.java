package MyPackage;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.geom.AffineTransform;
import java.awt.geom.Line2D;
import java.awt.geom.Line2D.Double.*;
import java.awt.geom.Point2D;
import java.awt.geom.Rectangle2D;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.text.DecimalFormat;
import java.util.List;
import java.util.Random;

import javax.swing.BorderFactory;
import javax.swing.GroupLayout;
import javax.swing.GroupLayout.Alignment;
import javax.swing.GroupLayout.ParallelGroup;
import javax.swing.GroupLayout.SequentialGroup;
import javax.swing.JApplet;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JSpinner;
import javax.swing.JTextField;
import javax.swing.JToggleButton;
import javax.swing.LayoutStyle;
import javax.swing.LayoutStyle.ComponentPlacement;
import javax.swing.SpinnerNumberModel;

import org.jfree.chart.ChartMouseEvent;
import org.jfree.chart.ChartMouseListener;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.annotations.XYShapeAnnotation;
import org.jfree.chart.axis.ValueAxis;
import org.jfree.chart.plot.XYPlot;
import org.jfree.data.xy.XYDataItem;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;

public class Experiment2
  extends JApplet
{
  private JToggleButton add_class_1;
  private JToggleButton add_class_2;
  private JSpinner c1;
  private JSpinner c2;
  private JPanel calculate;
  private JComboBox class1_select;
  private JComboBox class2_select;
  private JButton clear_button;
  private JPanel controls;
  private JButton estimate_mean;
  private JButton generate_mean;
  private JPanel graph;
  private JLabel jLabel1;
  private JLabel jLabel10;
  private JLabel jLabel11;
  private JLabel jLabel2;
  private JLabel jLabel3;
  private JLabel jLabel4;
  private JLabel jLabel5;
  private JLabel jLabel6;
  private JLabel jLabel7;
  private JLabel jLabel8;
  private JLabel jLabel9;
  private JPanel jPanel1;
  private JPanel jPanel2;
  private JButton load_class1;
  private JButton load_class2;
  private JTextField m1_1;
  private JTextField m1_2;
  private JTextField m1_3;
  private JTextField m1_4;
  private JTextField m2_1;
  private JTextField m2_2;
  private JTextField m2_3;
  private JTextField m2_4;
  private JPanel mark_points;
  private JButton reset_axes;
  private JTextField s11_1;
  private JTextField s11_2;
  private JTextField s11_3;
  private JTextField s11_4;
  private JTextField s12_1;
  private JTextField s12_2;
  private JTextField s12_3;
  private JTextField s12_4;
  private JTextField s21_1;
  private JTextField s21_2;
  private JTextField s21_3;
  private JTextField s21_4;
  private JTextField s22_1;
  private JTextField s22_2;
  private JTextField s22_3;
  private JTextField s22_4;
  private Chart1 chart;
  private ChartPanel innerGraph;
  private XYSeries series1;
  private XYSeries series2;
  
  public void init()
  {
    try
    {
      EventQueue.invokeAndWait(new Runnable()
      {
        public void run()
        {
          Experiment2.this.initComponents();
          Experiment2.this.initGraph();
          for (String d : Experiment2.this.datasets)
          {
            Experiment2.this.class1_select.addItem(d);
            Experiment2.this.class2_select.addItem(d);
          }
        }
      });
    }
    catch (Exception ex)
    {
      ex.printStackTrace();
    }
  }
  
  public void initGraph()
  {
    XYSeriesCollection x1 = new XYSeriesCollection();
    this.series1 = new XYSeries("Class 1");
    this.series2 = new XYSeries("Class 2");
    x1.addSeries(this.series1);
    x1.addSeries(this.series2);
    this.chart = new Chart1(x1, "Y-axis", "X-axis");
    
    this.innerGraph = new ChartPanel(this.chart);
    this.innerGraph.addChartMouseListener(new ChartMouseListener()
    {
      public void chartMouseClicked(ChartMouseEvent e)
      {
        Point2D p = Experiment2.this.innerGraph.translateScreenToJava2D(e.getTrigger().getPoint());
        Rectangle2D plotArea = Experiment2.this.innerGraph.getScreenDataArea();
        XYPlot plot = (XYPlot)Experiment2.this.chart.getPlot();
        double chartX = plot.getDomainAxis().java2DToValue(p.getY(), plotArea, plot.getDomainAxisEdge());
        double chartY = plot.getRangeAxis().java2DToValue(p.getX(), plotArea, plot.getRangeAxisEdge());
        if (Experiment2.this.add_class_1.isSelected()) {
          Experiment2.this.series1.add(chartX, chartY);
        } else if (Experiment2.this.add_class_2.isSelected()) {
          Experiment2.this.series2.add(chartX, chartY);
        }
      }
      
      public void chartMouseMoved(ChartMouseEvent event) {}
    });
    this.graph.add(this.innerGraph);
  }
  
  public static void main(String[] args)
  {
    Experiment2 applet = new Experiment2();
    applet.init();
    JFrame frame = new JFrame("Pattern Recognition : Experiment 2 - Mean and Covariance");
    frame.getContentPane().add(applet);
    
    frame.setDefaultCloseOperation(3);
    frame.setSize(900, 500);
    frame.pack();
    frame.setVisible(true);
  }
  
  private void initComponents()
  {
    this.graph = new JPanel();
    this.controls = new JPanel();
    this.mark_points = new JPanel();
    this.add_class_1 = new JToggleButton();
    this.add_class_2 = new JToggleButton();
    this.clear_button = new JButton();
    this.calculate = new JPanel();
    this.jLabel1 = new JLabel();
    this.m1_1 = new JTextField();
    this.m2_1 = new JTextField();
    this.jLabel2 = new JLabel();
    this.s11_1 = new JTextField();
    this.s12_1 = new JTextField();
    this.s21_1 = new JTextField();
    this.s22_1 = new JTextField();
    this.estimate_mean = new JButton();
    this.m1_2 = new JTextField();
    this.m2_2 = new JTextField();
    this.s11_2 = new JTextField();
    this.s12_2 = new JTextField();
    this.s21_2 = new JTextField();
    this.s22_2 = new JTextField();
    this.jLabel3 = new JLabel();
    this.jLabel4 = new JLabel();
    this.jPanel1 = new JPanel();
    this.jLabel5 = new JLabel();
    this.jLabel6 = new JLabel();
    this.class1_select = new JComboBox();
    this.class2_select = new JComboBox();
    this.load_class1 = new JButton();
    this.load_class2 = new JButton();
    this.jPanel2 = new JPanel();
    this.jLabel7 = new JLabel();
    this.jLabel8 = new JLabel();
    this.m1_3 = new JTextField();
    this.m2_3 = new JTextField();
    this.m1_4 = new JTextField();
    this.m2_4 = new JTextField();
    this.s12_4 = new JTextField();
    this.s11_4 = new JTextField();
    this.s12_3 = new JTextField();
    this.s11_3 = new JTextField();
    this.jLabel9 = new JLabel();
    this.jLabel10 = new JLabel();
    this.generate_mean = new JButton();
    this.s21_3 = new JTextField();
    this.s22_3 = new JTextField();
    this.s21_4 = new JTextField();
    this.s22_4 = new JTextField();
    this.jLabel11 = new JLabel();
    this.c1 = new JSpinner();
    this.c2 = new JSpinner();
    this.reset_axes = new JButton();
    
    this.graph.setMinimumSize(new Dimension(400, 400));
    this.graph.setPreferredSize(new Dimension(600, 600));
    this.graph.setLayout(new GridLayout(1, 0));
    getContentPane().add(this.graph, "Center");
    
    this.controls.setPreferredSize(new Dimension(400, 600));
    
    this.mark_points.setBorder(BorderFactory.createTitledBorder("Mark Points"));
    this.mark_points.setPreferredSize(new Dimension(218, 68));
    
    this.add_class_1.setText("Class 1");
    this.add_class_1.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment2.this.add_class_1ActionPerformed(evt);
      }
    });
    this.add_class_2.setText("Class 2");
    this.add_class_2.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment2.this.add_class_2ActionPerformed(evt);
      }
    });
    this.clear_button.setText("Clear");
    this.clear_button.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment2.this.clear_buttonActionPerformed(evt);
      }
    });
    GroupLayout mark_pointsLayout = new GroupLayout(this.mark_points);
    this.mark_points.setLayout(mark_pointsLayout);
    mark_pointsLayout.setHorizontalGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(mark_pointsLayout.createSequentialGroup().addContainerGap().addComponent(this.add_class_1).addGap(18, 18, 18).addComponent(this.add_class_2).addGap(18, 18, 18).addComponent(this.clear_button).addContainerGap(101, 32767)));
    
    mark_pointsLayout.setVerticalGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(mark_pointsLayout.createSequentialGroup().addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.add_class_1).addComponent(this.add_class_2).addComponent(this.clear_button)).addContainerGap(-1, 32767)));
    
    this.calculate.setBorder(BorderFactory.createTitledBorder("Calculate"));
    
    this.jLabel1.setText("Mean");
    
    this.m1_1.setEditable(false);
    this.m1_1.setText("0");
    
    this.m2_1.setEditable(false);
    this.m2_1.setText("0");
    
    this.jLabel2.setText("Co-Variance");
    
    this.s11_1.setEditable(false);
    this.s11_1.setText("0");
    
    this.s12_1.setEditable(false);
    this.s12_1.setText("0");
    
    this.s21_1.setEditable(false);
    this.s21_1.setText("0");
    
    this.s22_1.setEditable(false);
    this.s22_1.setText("0");
    
    this.estimate_mean.setText("Estimate");
    this.estimate_mean.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment2.this.estimate_meanActionPerformed(evt);
      }
    });
    this.m1_2.setEditable(false);
    this.m1_2.setText("0");
    
    this.m2_2.setEditable(false);
    this.m2_2.setText("0");
    
    this.s11_2.setEditable(false);
    this.s11_2.setText("0");
    
    this.s12_2.setEditable(false);
    this.s12_2.setText("0");
    
    this.s21_2.setEditable(false);
    this.s21_2.setText("0");
    
    this.s22_2.setEditable(false);
    this.s22_2.setText("0");
    
    this.jLabel3.setFont(new Font("DejaVu Sans", 1, 14));
    this.jLabel3.setText("Class 1");
    
    this.jLabel4.setFont(new Font("DejaVu Sans", 1, 14));
    this.jLabel4.setText("Class 2");
    
    GroupLayout calculateLayout = new GroupLayout(this.calculate);
    this.calculate.setLayout(calculateLayout);
    calculateLayout.setHorizontalGroup(calculateLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(calculateLayout.createSequentialGroup().addGroup(calculateLayout.createParallelGroup(GroupLayout.Alignment.LEADING, false).addGroup(calculateLayout.createSequentialGroup().addContainerGap().addGroup(calculateLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addComponent(this.jLabel2).addComponent(this.estimate_mean)).addGap(18, 18, 18)).addGroup(GroupLayout.Alignment.TRAILING, calculateLayout.createSequentialGroup().addContainerGap(-1, 32767).addComponent(this.jLabel1).addGap(27, 27, 27))).addGroup(calculateLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(calculateLayout.createSequentialGroup().addComponent(this.m1_1, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.m2_1, -2, 40, -2)).addGroup(calculateLayout.createSequentialGroup().addComponent(this.s21_1, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.s22_1, -2, 40, -2)).addGroup(calculateLayout.createSequentialGroup().addComponent(this.s11_1, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.s12_1, -2, 40, -2)).addComponent(this.jLabel3)).addGap(18, 18, 18).addGroup(calculateLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addComponent(this.jLabel4).addGroup(calculateLayout.createSequentialGroup().addComponent(this.m1_2, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.m2_2, -2, 40, -2)).addGroup(calculateLayout.createSequentialGroup().addComponent(this.s21_2, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.s22_2, -2, 40, -2)).addGroup(calculateLayout.createSequentialGroup().addComponent(this.s11_2, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.s12_2, -2, 40, -2))).addContainerGap(-1, 32767)));
    
    calculateLayout.setVerticalGroup(calculateLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(calculateLayout.createSequentialGroup().addGroup(calculateLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel3).addComponent(this.jLabel4)).addGap(12, 12, 12).addGroup(calculateLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(calculateLayout.createSequentialGroup().addGroup(calculateLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.m1_1, -2, -1, -2).addComponent(this.m2_1, -2, -1, -2).addComponent(this.jLabel1)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(calculateLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel2).addComponent(this.s11_1, -2, -1, -2).addComponent(this.s12_1, -2, -1, -2)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(calculateLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.s21_1, -2, -1, -2).addComponent(this.s22_1, -2, -1, -2).addComponent(this.estimate_mean))).addGroup(calculateLayout.createSequentialGroup().addGroup(calculateLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.m1_2, -2, -1, -2).addComponent(this.m2_2, -2, -1, -2)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(calculateLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.s11_2, -2, -1, -2).addComponent(this.s12_2, -2, -1, -2)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(calculateLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.s21_2, -2, -1, -2).addComponent(this.s22_2, -2, -1, -2)))).addContainerGap(-1, 32767)));
    
    this.jPanel1.setBorder(BorderFactory.createTitledBorder("Load Custom Datasets"));
    
    this.jLabel5.setText("Class 1");
    
    this.jLabel6.setText("Class 2");
    
    this.load_class1.setText("Load");
    this.load_class1.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment2.this.load_class1ActionPerformed(evt);
      }
    });
    this.load_class2.setText("Load");
    this.load_class2.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment2.this.load_class2ActionPerformed(evt);
      }
    });
    GroupLayout jPanel1Layout = new GroupLayout(this.jPanel1);
    this.jPanel1.setLayout(jPanel1Layout);
    jPanel1Layout.setHorizontalGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel1Layout.createSequentialGroup().addContainerGap().addGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.LEADING, false).addGroup(jPanel1Layout.createSequentialGroup().addComponent(this.jLabel5).addGap(18, 18, 18).addComponent(this.class1_select, -2, 143, -2)).addGroup(jPanel1Layout.createSequentialGroup().addComponent(this.jLabel6).addGap(18, 18, 18).addComponent(this.class2_select, 0, -1, 32767))).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.TRAILING).addComponent(this.load_class1, -1, 73, 32767).addComponent(this.load_class2, -1, 73, 32767)).addContainerGap()));
    
    jPanel1Layout.setVerticalGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel1Layout.createSequentialGroup().addGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel5).addComponent(this.class1_select, -2, -1, -2).addComponent(this.load_class1)).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel6).addComponent(this.class2_select, -2, -1, -2).addComponent(this.load_class2)).addContainerGap(14, 32767)));
    
    this.jPanel2.setBorder(BorderFactory.createTitledBorder("Generate Random Values"));
    
    this.jLabel7.setFont(new Font("DejaVu Sans", 1, 14));
    this.jLabel7.setText("Class 1");
    
    this.jLabel8.setFont(new Font("DejaVu Sans", 1, 14));
    this.jLabel8.setText("Class 2");
    
    this.m1_3.setText("0");
    
    this.m2_3.setText("0");
    
    this.m1_4.setText("0");
    
    this.m2_4.setText("0");
    
    this.s12_4.setText("0");
    
    this.s11_4.setText("1");
    
    this.s12_3.setText("0");
    
    this.s11_3.setText("1");
    
    this.jLabel9.setText("Mean");
    
    this.jLabel10.setText("Co-Variance");
    
    this.generate_mean.setText("Generate");
    this.generate_mean.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment2.this.generate_meanActionPerformed(evt);
      }
    });
    this.s21_3.setText("0");
    
    this.s22_3.setText("1");
    
    this.s21_4.setText("0");
    
    this.s22_4.setText("1");
    
    this.jLabel11.setText("Count");
    
    this.c1.setModel(new SpinnerNumberModel(Integer.valueOf(100), Integer.valueOf(0), null, Integer.valueOf(10)));
    
    this.c2.setModel(new SpinnerNumberModel(Integer.valueOf(100), Integer.valueOf(0), null, Integer.valueOf(10)));
    
    GroupLayout jPanel2Layout = new GroupLayout(this.jPanel2);
    this.jPanel2.setLayout(jPanel2Layout);
    jPanel2Layout.setHorizontalGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addContainerGap().addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addComponent(this.jLabel10).addComponent(this.generate_mean).addGroup(jPanel2Layout.createSequentialGroup().addGap(34, 34, 34).addComponent(this.jLabel9)))).addGroup(jPanel2Layout.createSequentialGroup().addGap(46, 46, 46).addComponent(this.jLabel11))).addGap(18, 18, 18).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.s21_3, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.s22_3, -2, 40, -2)).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.s11_3, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.s12_3, -2, 40, -2)).addComponent(this.jLabel7).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.m1_3, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.m2_3, -2, 40, -2)).addComponent(this.c1, -2, 86, -2)).addGap(18, 18, 18).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addComponent(this.jLabel8).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.m1_4, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.m2_4, -2, 40, -2)).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.s21_4, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.s22_4, -2, 40, -2)).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.s11_4, -2, 40, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.s12_4, -2, 40, -2)).addComponent(this.c2, -1, 86, 32767)).addContainerGap()));
    
    jPanel2Layout.setVerticalGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel7).addComponent(this.jLabel8)).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED, -1, 32767).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel11).addComponent(this.c1, -2, -1, -2).addComponent(this.c2, -2, -1, -2)).addGap(13, 13, 13).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel9).addComponent(this.m1_3, -2, -1, -2).addComponent(this.m2_3, -2, -1, -2)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel10).addComponent(this.s11_3, -2, -1, -2).addComponent(this.s12_3, -2, -1, -2)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.s21_3, -2, -1, -2).addComponent(this.s22_3, -2, -1, -2).addComponent(this.generate_mean))).addGroup(jPanel2Layout.createSequentialGroup().addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.m1_4, -2, -1, -2).addComponent(this.m2_4, -2, -1, -2)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.s11_4, -2, -1, -2).addComponent(this.s12_4, -2, -1, -2)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.s21_4, -2, -1, -2).addComponent(this.s22_4, -2, -1, -2)))).addGap(12, 12, 12)));
    
    this.reset_axes.setText("Resize Axes");
    this.reset_axes.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment2.this.reset_axesActionPerformed(evt);
      }
    });
    GroupLayout controlsLayout = new GroupLayout(this.controls);
    this.controls.setLayout(controlsLayout);
    controlsLayout.setHorizontalGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addContainerGap().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.TRAILING, false).addComponent(this.calculate, GroupLayout.Alignment.LEADING, -1, -1, 32767).addComponent(this.mark_points, GroupLayout.Alignment.LEADING, -1, 322, 32767).addComponent(this.jPanel1, GroupLayout.Alignment.LEADING, -1, -1, 32767).addComponent(this.jPanel2, GroupLayout.Alignment.LEADING, -1, -1, 32767)).addComponent(this.reset_axes)).addContainerGap(66, 32767)));
    
    controlsLayout.setVerticalGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(GroupLayout.Alignment.TRAILING, controlsLayout.createSequentialGroup().addGap(29, 29, 29).addComponent(this.jPanel1, -2, -1, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.mark_points, -2, -1, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.calculate, -2, -1, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.jPanel2, -2, -1, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.reset_axes).addGap(133, 133, 133)));
    
    getContentPane().add(this.controls, "East");
  }
  
  private void clear_buttonActionPerformed(ActionEvent evt)
  {
    XYPlot p = (XYPlot)this.chart.getPlot();
    p.clearAnnotations();
    this.series1.clear();
    this.series2.clear();
    
    this.add_class_1.setSelected(false);
    this.add_class_2.setSelected(false);
  }
  
  private void add_class_1ActionPerformed(ActionEvent evt)
  {
    this.add_class_2.setSelected(false);
    if (this.add_class_1.isSelected())
    {
      this.chart.getXYPlot().getDomainAxis().setAutoRange(false);
      this.chart.getXYPlot().getRangeAxis().setAutoRange(false);
    }
    else
    {
      this.chart.getXYPlot().getDomainAxis().setAutoRange(true);
      this.chart.getXYPlot().getRangeAxis().setAutoRange(true);
    }
  }
  
  private void add_class_2ActionPerformed(ActionEvent evt)
  {
    this.add_class_1.setSelected(false);
    if (this.add_class_2.isSelected())
    {
      this.chart.getXYPlot().getDomainAxis().setAutoRange(false);
      this.chart.getXYPlot().getRangeAxis().setAutoRange(false);
    }
    else
    {
      this.chart.getXYPlot().getDomainAxis().setAutoRange(true);
      this.chart.getXYPlot().getRangeAxis().setAutoRange(true);
    }
  }
  
  private void estimate_meanActionPerformed(ActionEvent evt)
  {
    XYPlot plot = (XYPlot)this.chart.getPlot();
    BasicStroke bs = new BasicStroke(1.0F, 0, 0, 2.0F, new float[] { 5.0F, 5.0F }, 2.0F);
    List<XYDataItem> s1 = this.series1.getItems();
    double sum1 = 0.0D;double sum2 = 0.0D;
    for (int i = 0; i < s1.size(); i++)
    {
      sum1 += ((XYDataItem)s1.get(i)).getYValue();
      sum2 += ((XYDataItem)s1.get(i)).getXValue();
    }
    double m1_val1 = sum1 / s1.size();
    double m2_val1 = sum2 / s1.size();
    this.m1_1.setText(this.df.format(m1_val1));
    this.m2_1.setText(this.df.format(m2_val1));
    
    double s11_val1 = 0.0D;double s12_val1 = 0.0D;double s22_val1 = 0.0D;
    for (int i = 0; i < s1.size(); i++)
    {
      s11_val1 += Math.pow(((XYDataItem)s1.get(i)).getYValue(), 2.0D);
      s22_val1 += Math.pow(((XYDataItem)s1.get(i)).getXValue(), 2.0D);
      s12_val1 += ((XYDataItem)s1.get(i)).getYValue() * ((XYDataItem)s1.get(i)).getXValue();
    }
    s11_val1 = s11_val1 / s1.size() - m1_val1 * m1_val1;
    s22_val1 = s22_val1 / s1.size() - m2_val1 * m2_val1;
    s12_val1 = s12_val1 / s1.size() - m1_val1 * m2_val1;
    this.s11_1.setText(this.df.format(s11_val1));
    this.s12_1.setText(this.df.format(s12_val1));
    this.s21_1.setText(this.df.format(s12_val1));
    this.s22_1.setText(this.df.format(s22_val1));
    double e1 = eigen1(s11_val1, s12_val1, s22_val1);
    double e2 = eigen2(s11_val1, s12_val1, s22_val1);
    Line2D l1 = new Line2D.Double(m2_val1 - 2.0D * e1, m1_val1, m2_val1 + 2.0D * e1, m1_val1);
    Line2D l2 = new Line2D.Double(m2_val1, m1_val1 - 2.0D * e2, m2_val1, m1_val1 + 2.0D * e2);
    AffineTransform at = AffineTransform.getRotateInstance(Math.atan2(1.0D, s12_val1), m2_val1, m1_val1);
    XYShapeAnnotation a1 = new XYShapeAnnotation(at.createTransformedShape(l1), bs, Color.blue);
    XYShapeAnnotation a2 = new XYShapeAnnotation(at.createTransformedShape(l2), bs, Color.blue);
    plot.addAnnotation(a1);
    plot.addAnnotation(a2);
    
    List<XYDataItem> s2 = this.series2.getItems();
    sum1 = 0.0D;
    sum2 = 0.0D;
    for (int i = 0; i < s2.size(); i++)
    {
      sum1 += ((XYDataItem)s2.get(i)).getYValue();
      sum2 += ((XYDataItem)s2.get(i)).getXValue();
    }
    double m1_val2 = sum1 / s2.size();
    double m2_val2 = sum2 / s2.size();
    this.m1_2.setText(this.df.format(m1_val2));
    this.m2_2.setText(this.df.format(m2_val2));
    
    double s11_val2 = 0.0D;double s12_val2 = 0.0D;double s22_val2 = 0.0D;
    for (int i = 0; i < s2.size(); i++)
    {
      s11_val2 += Math.pow(((XYDataItem)s2.get(i)).getYValue(), 2.0D);
      s22_val2 += Math.pow(((XYDataItem)s2.get(i)).getXValue(), 2.0D);
      s12_val2 += ((XYDataItem)s2.get(i)).getYValue() * ((XYDataItem)s2.get(i)).getXValue();
    }
    s11_val2 = s11_val2 / s2.size() - m1_val2 * m1_val2;
    s22_val2 = s22_val2 / s2.size() - m2_val2 * m2_val2;
    s12_val2 = s12_val2 / s2.size() - m1_val2 * m2_val2;
    this.s11_2.setText(this.df.format(s11_val2));
    this.s12_2.setText(this.df.format(s12_val2));
    this.s21_2.setText(this.df.format(s12_val2));
    this.s22_2.setText(this.df.format(s22_val2));
    
    e1 = eigen1(s11_val2, s12_val2, s22_val2);
    e2 = eigen2(s11_val2, s12_val2, s22_val2);
    Line2D l3 = new Line2D.Double(m2_val2 - 2.0D * e1, m1_val2, m2_val2 + 2.0D * e1, m1_val2);
    Line2D l4 = new Line2D.Double(m2_val2, m1_val2 - 2.0D * e2, m2_val2, m1_val2 + 2.0D * e2);
    AffineTransform at2 = AffineTransform.getRotateInstance(Math.atan2(1.0D, s12_val2), m2_val2, m1_val2);
    XYShapeAnnotation a3 = new XYShapeAnnotation(at2.createTransformedShape(l3), bs, Color.red);
    XYShapeAnnotation a4 = new XYShapeAnnotation(at2.createTransformedShape(l4), bs, Color.red);
    plot.addAnnotation(a3);
    plot.addAnnotation(a4);
  }
  
  private void load_class1ActionPerformed(ActionEvent evt)
  {
    this.series1.clear();
    InputStream bis = null;
    try
    {
      bis = getClass().getResourceAsStream(this.path + this.class1_select.getSelectedItem());
      try
      {
        InputStreamReader inR = new InputStreamReader(bis);
        BufferedReader buf = new BufferedReader(inR);
        int i = 0;
        
        int n = Integer.parseInt(buf.readLine());
        String str;
        while (((str = buf.readLine()) != null) && 
          (i != n))
        {
          String[] val = str.split("\t");
          this.series1.add(Double.parseDouble(val[0]), Double.parseDouble(val[1]));
          i++;
        }
        XYPlot p = (XYPlot)this.chart.getPlot();
        p.clearAnnotations();
      }
      finally
      {
        bis.close();
      }
    }
    catch (IOException e)
    {
      e.printStackTrace();
    }
  }
  
  private void load_class2ActionPerformed(ActionEvent evt)
  {
    this.series2.clear();
    InputStream bis = null;
    try
    {
      bis = getClass().getResourceAsStream(this.path + this.class2_select.getSelectedItem());
      try
      {
        InputStreamReader inR = new InputStreamReader(bis);
        BufferedReader buf = new BufferedReader(inR);
        int i = 0;
        
        int n = Integer.parseInt(buf.readLine());
        String str;
        while (((str = buf.readLine()) != null) && 
          (i != n))
        {
          String[] val = str.split("\t");
          this.series2.add(Double.parseDouble(val[0]), Double.parseDouble(val[1]));
          i++;
        }
        XYPlot p = (XYPlot)this.chart.getPlot();
        p.clearAnnotations();
      }
      finally
      {
        bis.close();
      }
    }
    catch (IOException e)
    {
      e.printStackTrace();
    }
  }
  
  private void generate_meanActionPerformed(ActionEvent evt)
  {
    XYPlot plot = (XYPlot)this.chart.getPlot();
    plot.clearAnnotations();
    BasicStroke bs = new BasicStroke(1.0F);
    
    this.series1.clear();
    int count_1 = Integer.parseInt(this.c1.getValue().toString());
    Random g1_1 = new Random();
    Random g2_1 = new Random();
    double m1_val1 = Double.parseDouble(this.m1_3.getText());
    double m2_val1 = Double.parseDouble(this.m2_3.getText());
    double s11_val1 = Double.parseDouble(this.s11_3.getText());
    double s12_val1 = Double.parseDouble(this.s12_3.getText());
    double s21_val1 = Double.parseDouble(this.s21_3.getText());
    double s22_val1 = Double.parseDouble(this.s22_3.getText());
    double e1 = eigen1(s11_val1, s12_val1, s22_val1);
    double e2 = eigen2(s11_val1, s12_val1, s22_val1);
    Line2D l1 = new Line2D.Double(m2_val1 - 2.0D * e1, m1_val1, m2_val1 + 2.0D * e1, m1_val1);
    Line2D l2 = new Line2D.Double(m2_val1, m1_val1 - 2.0D * e2, m2_val1, m1_val1 + 2.0D * e2);
    AffineTransform at = AffineTransform.getRotateInstance(Math.atan2(1.0D, s12_val1), m2_val1, m1_val1);
    XYShapeAnnotation a1 = new XYShapeAnnotation(at.createTransformedShape(l1), bs, Color.blue);
    XYShapeAnnotation a2 = new XYShapeAnnotation(at.createTransformedShape(l2), bs, Color.blue);
    for (int i = 0; i < count_1; i++)
    {
      double x1 = g1_1.nextGaussian();
      double x2 = g2_1.nextGaussian();
      this.series1.add(x1 * s11_val1 + x2 * s12_val1 + m2_val1, x1 * s21_val1 + x2 * s22_val1 + m1_val1);
    }
    plot.addAnnotation(a1);
    plot.addAnnotation(a2);
    
    this.series2.clear();
    int count_2 = Integer.parseInt(this.c2.getValue().toString());
    Random g1_2 = new Random();
    Random g2_2 = new Random();
    double m1_val2 = Double.parseDouble(this.m1_4.getText());
    double m2_val2 = Double.parseDouble(this.m2_4.getText());
    double s11_val2 = Double.parseDouble(this.s11_4.getText());
    double s12_val2 = Double.parseDouble(this.s12_4.getText());
    double s21_val2 = Double.parseDouble(this.s21_4.getText());
    double s22_val2 = Double.parseDouble(this.s22_4.getText());
    e1 = eigen1(s11_val2, s12_val2, s22_val2);
    e2 = eigen2(s11_val2, s12_val2, s22_val2);
    Line2D l3 = new Line2D.Double(m2_val2 - 2.0D * e1, m1_val2, m2_val2 + 2.0D * e1, m1_val2);
    Line2D l4 = new Line2D.Double(m2_val2, m1_val2 - 2.0D * e2, m2_val2, m1_val2 + 2.0D * e2);
    AffineTransform at2 = AffineTransform.getRotateInstance(Math.atan2(1.0D, s12_val2), m2_val2, m1_val2);
    XYShapeAnnotation a3 = new XYShapeAnnotation(at2.createTransformedShape(l3), bs, Color.red);
    XYShapeAnnotation a4 = new XYShapeAnnotation(at2.createTransformedShape(l4), bs, Color.red);
    for (int i = 0; i < count_2; i++)
    {
      double x1 = g1_2.nextGaussian();
      double x2 = g2_2.nextGaussian();
      this.series2.add(x1 * s11_val2 + x2 * s12_val2 + m2_val2, x1 * s21_val2 + x2 * s22_val2 + m1_val2);
    }
    plot.addAnnotation(a3);
    plot.addAnnotation(a4);
  }
  
  private void reset_axesActionPerformed(ActionEvent evt)
  {
    XYPlot plot = (XYPlot)this.chart.getPlot();
    plot.getDomainAxis().setAutoRange(true);
    plot.getRangeAxis().setAutoRange(true);
    double r1 = plot.getRangeAxis().getLowerBound();
    double r2 = plot.getDomainAxis().getLowerBound();
    double l1 = plot.getRangeAxis().getUpperBound();
    double l2 = plot.getDomainAxis().getUpperBound();
    double r = r1 < r2 ? r1 : r2;
    double l = l1 > l2 ? l1 : l2;
    plot.getRangeAxis().setRange(r, l);
    plot.getDomainAxis().setRange(r, l);
  }
  
  private DecimalFormat df = new DecimalFormat("###.##");
  private String[] datasets = { "T1", "T2", "T3", "T4" };
  private String path = "/Data/";
  
  private double eigen1(double a, double b, double d)
  {
    double e1 = Math.abs((a + d) / 2.0D + Math.sqrt((4.0D * b * b + (a - d) * (a - d)) / 4.0D));
    double e2 = Math.abs((a + d) / 2.0D - Math.sqrt((4.0D * b * b + (a - d) * (a - d)) / 4.0D));
    return e1 > e2 ? e1 : e2;
  }
  
  private double eigen2(double a, double b, double d)
  {
    double e1 = Math.abs((a + d) / 2.0D + Math.sqrt((4.0D * b * b + (a - d) * (a - d)) / 4.0D));
    double e2 = Math.abs((a + d) / 2.0D - Math.sqrt((4.0D * b * b + (a - d) * (a - d)) / 4.0D));
    return e1 < e2 ? e1 : e2;
  }
}
