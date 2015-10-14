package MyPackage;

import java.awt.BasicStroke;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.geom.Point2D;
import java.awt.geom.Rectangle2D;
import java.io.PrintStream;
import java.text.DecimalFormat;
import java.util.List;

import javax.accessibility.AccessibleContext;
import javax.swing.BorderFactory;
import javax.swing.DefaultComboBoxModel;
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
import javax.swing.JTextField;
import javax.swing.JToggleButton;
import javax.swing.LayoutStyle;
import javax.swing.LayoutStyle.ComponentPlacement;

import org.jfree.chart.ChartMouseEvent;
import org.jfree.chart.ChartMouseListener;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.axis.ValueAxis;
import org.jfree.chart.plot.XYPlot;
import org.jfree.data.Range;
import org.jfree.data.xy.XYDataItem;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;

public class Experiment6
  extends JApplet
{
  private JToggleButton add_class_1;
  private JToggleButton add_class_2;
  private JPanel add_data_panel;
  private JButton calculate_mean_variance;
  private JButton clear_button;
  private JPanel distributionFunction;
  private JPanel feature_graph;
  private JPanel graphs;
  private JPanel input_graph;
  private JComboBox jComboBox1;
  private JLabel jLabel1;
  private JLabel jLabel2;
  private JLabel jLabel3;
  private JLabel jLabel4;
  private JLabel jLabel5;
  private JPanel jPanel7;
  private JTextField m1_1;
  private JTextField m1_2;
  private JTextField m2_1;
  private JTextField m2_2;
  private JButton mark_all;
  private JPanel mark_points;
  private JTextField s11_1;
  private JTextField s11_2;
  private JTextField s12_1;
  private JTextField s12_2;
  private JTextField s21_1;
  private JTextField s21_2;
  private JTextField s22_1;
  private JTextField s22_2;
  
  public void init()
  {
    try
    {
      EventQueue.invokeAndWait(new Runnable()
      {
        public void run()
        {
          Experiment6.this.initComponents();
          Experiment6.this.initGraph();
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
    this.plot = ((XYPlot)this.chart.getPlot());
    this.plot.getDomainAxis().setRange(-1.1D, 1.1D);
    this.plot.getRangeAxis().setRange(-1.1D, 1.1D);
    
    this.inner_graph = new ChartPanel(this.chart);
    this.inner_graph.addChartMouseListener(new ChartMouseListener()
    {
      public void chartMouseClicked(ChartMouseEvent e)
      {
        Point2D p = Experiment6.this.inner_graph.translateScreenToJava2D(e.getTrigger().getPoint());
        Rectangle2D plotArea = Experiment6.this.inner_graph.getScreenDataArea();
        XYPlot plot = (XYPlot)Experiment6.this.chart.getPlot();
        double chartX = plot.getDomainAxis().java2DToValue(p.getY(), plotArea, plot.getDomainAxisEdge());
        double chartY = plot.getRangeAxis().java2DToValue(p.getX(), plotArea, plot.getRangeAxisEdge());
        if (Experiment6.this.add_class_1.isSelected()) {
          Experiment6.this.series1.add(chartX, chartY);
        } else if (Experiment6.this.add_class_2.isSelected()) {
          Experiment6.this.series2.add(chartX, chartY);
        }
      }
      
      public void chartMouseMoved(ChartMouseEvent event) {}
    });
    this.input_graph.add(this.inner_graph);
  }
  
  public static void main(String[] args)
  {
    Experiment6 applet = new Experiment6();
    applet.init();
    JFrame frame = new JFrame("Pattern Recognition : Experiment 6 - MLE: Learning the classifier from data ");
    frame.getContentPane().add(applet);
    
    frame.setDefaultCloseOperation(3);
    frame.setSize(800, 500);
    frame.pack();
    frame.setVisible(true);
  }
  
  private void initComponents()
  {
    this.graphs = new JPanel();
    this.input_graph = new JPanel();
    this.feature_graph = new JPanel();
    this.jPanel7 = new JPanel();
    this.mark_points = new JPanel();
    this.m1_1 = new JTextField();
    this.jLabel1 = new JLabel();
    this.m2_1 = new JTextField();
    this.jLabel2 = new JLabel();
    this.jLabel3 = new JLabel();
    this.m1_2 = new JTextField();
    this.m2_2 = new JTextField();
    this.jLabel4 = new JLabel();
    this.s11_1 = new JTextField();
    this.s12_1 = new JTextField();
    this.s11_2 = new JTextField();
    this.s12_2 = new JTextField();
    this.s21_1 = new JTextField();
    this.s22_1 = new JTextField();
    this.s21_2 = new JTextField();
    this.s22_2 = new JTextField();
    this.distributionFunction = new JPanel();
    this.jComboBox1 = new JComboBox();
    this.jLabel5 = new JLabel();
    this.add_data_panel = new JPanel();
    this.add_class_2 = new JToggleButton();
    this.clear_button = new JButton();
    this.add_class_1 = new JToggleButton();
    this.calculate_mean_variance = new JButton();
    this.mark_all = new JButton();
    
    this.graphs.setPreferredSize(new Dimension(1000, 500));
    this.graphs.setLayout(new GridLayout(1, 0, 10, 10));
    
    this.input_graph.setMaximumSize(new Dimension(400, 400));
    this.input_graph.setMinimumSize(new Dimension(300, 300));
    this.input_graph.setPreferredSize(new Dimension(500, 500));
    this.input_graph.setLayout(new GridLayout(1, 0));
    this.graphs.add(this.input_graph);
    
    this.feature_graph.setPreferredSize(new Dimension(500, 500));
    this.feature_graph.setLayout(new GridLayout(1, 0));
    
    this.mark_points.setBorder(BorderFactory.createTitledBorder("Mark Points"));
    this.mark_points.setPreferredSize(new Dimension(218, 68));
    
    this.m1_1.setText(" ");
    
    this.jLabel1.setText("Mean");
    
    this.m2_1.setText(" ");
    
    this.jLabel2.setText("Class 1");
    
    this.jLabel3.setText("Class 2");
    
    this.m1_2.setText(" ");
    
    this.m2_2.setText(" ");
    
    this.jLabel4.setText("Covariance");
    
    this.s12_1.setText(" ");
    
    this.s11_2.setText(" ");
    
    this.s12_2.setText(" ");
    
    this.s21_1.setText(" ");
    
    this.s22_1.setText(" ");
    
    this.s21_2.setText(" ");
    
    this.s22_2.setText(" ");
    
    GroupLayout mark_pointsLayout = new GroupLayout(this.mark_points);
    this.mark_points.setLayout(mark_pointsLayout);
    mark_pointsLayout.setHorizontalGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(GroupLayout.Alignment.TRAILING, mark_pointsLayout.createSequentialGroup().addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(mark_pointsLayout.createSequentialGroup().addGap(113, 113, 113).addComponent(this.jLabel2, -2, 77, -2)).addGroup(mark_pointsLayout.createSequentialGroup().addGap(14, 14, 14).addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.TRAILING).addComponent(this.jLabel4).addComponent(this.jLabel1)).addGap(18, 18, 18).addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING, false).addComponent(this.m1_1, GroupLayout.Alignment.TRAILING).addComponent(this.s11_1, GroupLayout.Alignment.TRAILING).addComponent(this.s21_1, -2, 47, -2)).addGap(18, 18, 18).addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.TRAILING, false).addComponent(this.m2_1).addComponent(this.s12_1, GroupLayout.Alignment.LEADING).addComponent(this.s22_1, GroupLayout.Alignment.LEADING, -1, 47, 32767)))).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED, 59, 32767).addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(GroupLayout.Alignment.TRAILING, mark_pointsLayout.createSequentialGroup().addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING, false).addComponent(this.s21_2).addComponent(this.s11_2, GroupLayout.Alignment.TRAILING).addComponent(this.m1_2, GroupLayout.Alignment.TRAILING, -1, 57, 32767)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING, false).addComponent(this.s12_2, GroupLayout.Alignment.TRAILING).addComponent(this.m2_2, GroupLayout.Alignment.TRAILING, -1, 60, 32767).addComponent(this.s22_2)).addGap(35, 35, 35)).addGroup(GroupLayout.Alignment.TRAILING, mark_pointsLayout.createSequentialGroup().addComponent(this.jLabel3).addGap(83, 83, 83)))));
    
    mark_pointsLayout.setVerticalGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(mark_pointsLayout.createSequentialGroup().addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel2, -2, 14, -2).addComponent(this.jLabel3)).addGap(17, 17, 17).addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.m1_1, -2, -1, -2).addComponent(this.m2_1, -2, -1, -2).addComponent(this.jLabel1).addComponent(this.m2_2, -2, -1, -2).addComponent(this.m1_2, -2, -1, -2)).addGap(18, 18, 18).addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel4).addComponent(this.s11_1, -2, -1, -2).addComponent(this.s12_1, -2, -1, -2).addComponent(this.s12_2, -2, -1, -2).addComponent(this.s11_2, -2, -1, -2)).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.s21_1, -2, -1, -2).addComponent(this.s22_1, -2, -1, -2).addComponent(this.s22_2, -2, -1, -2).addComponent(this.s21_2, -2, -1, -2)).addContainerGap(28, 32767)));
    
    this.distributionFunction.setBorder(BorderFactory.createTitledBorder("Distibution Function"));
    this.distributionFunction.setDebugGraphicsOptions(-1);
    this.distributionFunction.setPreferredSize(new Dimension(218, 68));
    
    this.jComboBox1.setModel(new DefaultComboBoxModel(new String[] { "Gaussian/Normal Distribution", "Uniform Distribution" }));
    this.jComboBox1.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment6.this.jComboBox1ActionPerformed(evt);
      }
    });
    this.jLabel5.setText("Select Distribution Function");
    
    GroupLayout distributionFunctionLayout = new GroupLayout(this.distributionFunction);
    this.distributionFunction.setLayout(distributionFunctionLayout);
    distributionFunctionLayout.setHorizontalGroup(distributionFunctionLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(distributionFunctionLayout.createSequentialGroup().addContainerGap().addComponent(this.jLabel5).addGap(45, 45, 45).addComponent(this.jComboBox1, -2, -1, -2).addGap(72, 72, 72)));
    
    distributionFunctionLayout.setVerticalGroup(distributionFunctionLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(distributionFunctionLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jComboBox1, -2, -1, -2).addComponent(this.jLabel5)));
    
    this.add_data_panel.setBorder(BorderFactory.createTitledBorder("Add Data"));
    this.add_data_panel.setPreferredSize(new Dimension(329, 68));
    
    this.add_class_2.setText("Add Class 2");
    this.add_class_2.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment6.this.add_class_2ActionPerformed(evt);
      }
    });
    this.clear_button.setText("Clear");
    this.clear_button.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment6.this.clear_buttonActionPerformed(evt);
      }
    });
    this.add_class_1.setText("Add Class 1");
    this.add_class_1.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment6.this.add_class_1ActionPerformed(evt);
      }
    });
    this.calculate_mean_variance.setText("Calculate MLE");
    this.calculate_mean_variance.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment6.this.calculate_mean_varianceActionPerformed(evt);
      }
    });
    this.mark_all.setText("Mark All");
    this.mark_all.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment6.this.mark_allActionPerformed(evt);
      }
    });
    GroupLayout add_data_panelLayout = new GroupLayout(this.add_data_panel);
    this.add_data_panel.setLayout(add_data_panelLayout);
    add_data_panelLayout.setHorizontalGroup(add_data_panelLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(add_data_panelLayout.createSequentialGroup().addContainerGap().addGroup(add_data_panelLayout.createParallelGroup(GroupLayout.Alignment.TRAILING).addGroup(add_data_panelLayout.createSequentialGroup().addGap(18, 18, 18).addComponent(this.calculate_mean_variance, -1, 153, 32767).addGap(61, 61, 61).addComponent(this.mark_all)).addGroup(add_data_panelLayout.createSequentialGroup().addComponent(this.add_class_1).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addComponent(this.add_class_2).addGap(18, 18, 18).addComponent(this.clear_button, -2, 95, -2))).addGap(128, 128, 128)));
    
    add_data_panelLayout.setVerticalGroup(add_data_panelLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(add_data_panelLayout.createSequentialGroup().addGroup(add_data_panelLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.add_class_1).addComponent(this.add_class_2).addComponent(this.clear_button)).addGap(18, 18, 18).addGroup(add_data_panelLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.mark_all).addComponent(this.calculate_mean_variance)).addContainerGap(23, 32767)));
    
    GroupLayout jPanel7Layout = new GroupLayout(this.jPanel7);
    this.jPanel7.setLayout(jPanel7Layout);
    jPanel7Layout.setHorizontalGroup(jPanel7Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel7Layout.createSequentialGroup().addGroup(jPanel7Layout.createParallelGroup(GroupLayout.Alignment.TRAILING, false).addComponent(this.add_data_panel, GroupLayout.Alignment.LEADING, -1, 441, 32767).addGroup(GroupLayout.Alignment.LEADING, jPanel7Layout.createSequentialGroup().addContainerGap().addGroup(jPanel7Layout.createParallelGroup(GroupLayout.Alignment.TRAILING, false).addComponent(this.mark_points, GroupLayout.Alignment.LEADING, -1, 431, 32767).addComponent(this.distributionFunction, GroupLayout.Alignment.LEADING, -1, 431, 32767)))).addContainerGap(69, 32767)));
    
    jPanel7Layout.setVerticalGroup(jPanel7Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel7Layout.createSequentialGroup().addContainerGap().addComponent(this.distributionFunction, -2, 80, -2).addGap(18, 18, 18).addComponent(this.mark_points, -2, 175, -2).addGap(37, 37, 37).addComponent(this.add_data_panel, -2, 114, -2).addContainerGap(65, 32767)));
    
    this.distributionFunction.getAccessibleContext().setAccessibleName("Distribution ");
    
    this.feature_graph.add(this.jPanel7);
    
    this.graphs.add(this.feature_graph);
    
    getContentPane().add(this.graphs, "North");
  }
  
  private void add_class_1ActionPerformed(ActionEvent evt)
  {
    this.add_class_2.setSelected(false);
  }
  
  private void add_class_2ActionPerformed(ActionEvent evt)
  {
    this.add_class_1.setSelected(false);
  }
  
  private void clear_buttonActionPerformed(ActionEvent evt)
  {
    XYPlot p = (XYPlot)this.chart.getPlot();
    p.clearAnnotations();
    p.getDomainAxis().setRange(-1.1D, 1.1D);
    p.getRangeAxis().setRange(-1.1D, 1.1D);
    
    this.series1.clear();
    this.series2.clear();
    
    this.add_class_1.setSelected(false);
    this.add_class_2.setSelected(false);
  }
  
  private void calculate_mean_varianceActionPerformed(ActionEvent evt)
  {
    this.xmin_1 = 100.0D;
    this.ymin_1 = 100.0D;
    this.xmin_2 = 100.0D;
    this.ymin_2 = 100.0D;
    this.xmax_1 = -100.0D;
    this.ymax_1 = -100.0D;
    this.xmax_2 = -100.0D;
    this.ymax_2 = -100.0D;
    
    XYPlot plot = (XYPlot)this.chart.getPlot();
    BasicStroke bs = new BasicStroke(1.0F, 0, 0, 2.0F, new float[] { 5.0F, 5.0F }, 2.0F);
    List<XYDataItem> s1 = this.series1.getItems();
    
    double sum1 = 0.0D;double sum2 = 0.0D;
    double l1gammax = 0.0D;double l1gammay = 0.0D;
    System.out.print("Hello World\n");
    for (int i = 0; i < s1.size(); i++)
    {
      sum1 += ((XYDataItem)s1.get(i)).getYValue();
      sum2 += ((XYDataItem)s1.get(i)).getXValue();
      if (this.distribution == 1)
      {
        l1gammax += Math.log(((XYDataItem)s1.get(i)).getXValue());
        l1gammay += Math.log(((XYDataItem)s1.get(i)).getYValue());
      }
      if (((XYDataItem)s1.get(i)).getXValue() < this.xmin_1) {
        this.xmin_1 = ((XYDataItem)s1.get(i)).getXValue();
      }
      if (((XYDataItem)s1.get(i)).getXValue() > this.xmax_1) {
        this.xmax_1 = ((XYDataItem)s1.get(i)).getXValue();
      }
      if (((XYDataItem)s1.get(i)).getYValue() < this.ymin_1) {
        this.ymin_1 = ((XYDataItem)s1.get(i)).getYValue();
      }
      if (((XYDataItem)s1.get(i)).getYValue() > this.ymax_1) {
        this.ymax_1 = ((XYDataItem)s1.get(i)).getYValue();
      }
    }
    if (this.distribution == 1)
    {
      l1gammax /= s1.size();
      l1gammay /= s1.size();
    }
    this.m1_val1 = (sum1 / s1.size());
    this.m2_val1 = (sum2 / s1.size());
    this.m1_1.setText(this.df.format(this.m1_val1));
    this.m2_1.setText(this.df.format(this.m2_val1));
    
    this.s11_val1 = 0.0D;this.s12_val1 = 0.0D;this.s22_val1 = 0.0D;
    for (int i = 0; i < s1.size(); i++)
    {
      this.s11_val1 += Math.pow(((XYDataItem)s1.get(i)).getYValue(), 2.0D);
      this.s22_val1 += Math.pow(((XYDataItem)s1.get(i)).getXValue(), 2.0D);
      this.s12_val1 += ((XYDataItem)s1.get(i)).getYValue() * ((XYDataItem)s1.get(i)).getXValue();
    }
    this.s11_val1 = (this.s11_val1 / s1.size() - this.m1_val1 * this.m1_val1);
    this.s22_val1 = (this.s22_val1 / s1.size() - this.m2_val1 * this.m2_val1);
    this.s12_val1 = (this.s12_val1 / s1.size() - this.m1_val1 * this.m2_val1);
    if (this.distribution == 0)
    {
      this.s11_1.setText(this.df.format(this.s11_val1));
      this.s12_1.setText(this.df.format(this.s12_val1));
      this.s21_1.setText(this.df.format(this.s12_val1));
      this.s22_1.setText(this.df.format(this.s22_val1));
    }
    if ((this.distribution == 1) || (this.distribution == 2))
    {
      this.s11_1.setText("");
      this.s12_1.setText("");
      this.s21_1.setText("");
      this.s22_1.setText("");
    }
    this.s1Size = s1.size();
    
    List<XYDataItem> s2 = this.series2.getItems();
    
    sum1 = 0.0D;
    sum2 = 0.0D;
    double l2gammax = 0.0D;double l2gammay = 0.0D;
    for (int i = 0; i < s2.size(); i++)
    {
      sum1 += ((XYDataItem)s2.get(i)).getYValue();
      sum2 += ((XYDataItem)s2.get(i)).getXValue();
      if (this.distribution == 1)
      {
        l2gammax += Math.log(((XYDataItem)s2.get(i)).getXValue());
        l2gammay += Math.log(((XYDataItem)s2.get(i)).getYValue());
      }
      if (((XYDataItem)s2.get(i)).getXValue() < this.xmin_2) {
        this.xmin_2 = ((XYDataItem)s2.get(i)).getXValue();
      }
      if (((XYDataItem)s2.get(i)).getXValue() > this.xmax_2) {
        this.xmax_2 = ((XYDataItem)s2.get(i)).getXValue();
      }
      if (((XYDataItem)s2.get(i)).getYValue() < this.ymin_2) {
        this.ymin_2 = ((XYDataItem)s2.get(i)).getYValue();
      }
      if (((XYDataItem)s2.get(i)).getYValue() > this.ymax_2) {
        this.ymax_2 = ((XYDataItem)s2.get(i)).getYValue();
      }
    }
    if (this.distribution == 1)
    {
      l2gammax /= s2.size();
      l2gammay /= s2.size();
    }
    this.m1_val2 = (sum1 / s2.size());
    this.m2_val2 = (sum2 / s2.size());
    if (this.distribution == 0)
    {
      this.m1_2.setText(this.df.format(this.m1_val2));
      this.m2_2.setText(this.df.format(this.m2_val2));
    }
    this.s11_val2 = 0.0D;
    this.s12_val2 = 0.0D;
    this.s22_val2 = 0.0D;
    for (int i = 0; i < s2.size(); i++)
    {
      this.s11_val2 += Math.pow(((XYDataItem)s2.get(i)).getYValue(), 2.0D);
      this.s22_val2 += Math.pow(((XYDataItem)s2.get(i)).getXValue(), 2.0D);
      this.s12_val2 += ((XYDataItem)s2.get(i)).getYValue() * ((XYDataItem)s2.get(i)).getXValue();
    }
    this.s11_val2 = (this.s11_val2 / s2.size() - this.m1_val2 * this.m1_val2);
    this.s22_val2 = (this.s22_val2 / s2.size() - this.m2_val2 * this.m2_val2);
    this.s12_val2 = (this.s12_val2 / s2.size() - this.m1_val2 * this.m2_val2);
    if (this.distribution == 0)
    {
      this.s11_2.setText(this.df.format(this.s11_val2));
      this.s12_2.setText(this.df.format(this.s12_val2));
      this.s21_2.setText(this.df.format(this.s12_val2));
      this.s22_2.setText(this.df.format(this.s22_val2));
    }
    if (this.distribution == 1)
    {
      this.s11_1.setText("");
      this.s12_1.setText("");
      this.s21_1.setText("");
      this.s22_1.setText("");
      this.s11_2.setText("");
      this.s12_2.setText("");
      this.s21_2.setText("");
      this.s22_2.setText("");
    }
    if (this.distribution == 1) {}
    this.s2Size = s2.size();
  }
  
  private void jComboBox1ActionPerformed(ActionEvent evt)
  {
    this.distribution = this.jComboBox1.getSelectedIndex();
    if (this.distribution == 0)
    {
      this.jLabel1.setText("Mean");
      this.jLabel1.enable();
      this.m1_1.enable();
      this.m2_1.enable();
      this.m1_2.enable();
      this.m2_2.enable();
      this.jLabel4.enable();
      this.s11_1.enable();
      this.s21_1.enable();
      this.s12_1.enable();
      this.s22_1.enable();
      this.s11_2.enable();
      this.s21_2.enable();
      this.s12_2.enable();
      this.s22_2.enable();
      this.plot.getDomainAxis().setRange(-1.1D, 1.1D);
      this.plot.getRangeAxis().setRange(-1.1D, 1.1D);
    }
    if (this.distribution == 1)
    {
      this.jLabel1.disable();
      this.m1_1.disable();
      this.m2_1.disable();
      this.m1_2.disable();
      this.m2_2.disable();
      this.jLabel4.disable();
      this.s11_1.disable();
      this.s21_1.disable();
      this.s12_1.disable();
      this.s22_1.disable();
      this.s11_2.disable();
      this.s21_2.disable();
      this.s12_2.disable();
      this.s22_2.disable();
      System.out.print("Hello World\n");
    }
  }
  
  private void mark_allActionPerformed(ActionEvent evt)
  {
    this.series1.clear();
    this.series2.clear();
    XYPlot plot = (XYPlot)this.chart.getPlot();
    double l = plot.getRangeAxis().getRange().getLowerBound();
    double r = plot.getRangeAxis().getRange().getUpperBound();
    if (this.distribution == 0) {
      for (double i = l; i < r; i += (r - l) / 100.0D) {
        for (double j = l; j < r; j += (r - l) / 100.0D)
        {
          double p1 = prob1(j, i);
          double p2 = prob2(j, i);
          if (p1 > p2) {
            this.series1.add(j, i);
          } else {
            this.series2.add(j, i);
          }
        }
      }
    }
    if (this.distribution == 1) {
      for (double i = l; i < r; i += (r - l) / 100.0D) {
        for (double j = l; j < r; j += (r - l) / 100.0D)
        {
          double p1 = prob1(j, i);
          double p2 = prob2(j, i);
          if (p1 > p2) {
            this.series1.add(j, i);
          }
          if (p2 > p1) {
            this.series2.add(j, i);
          }
          if ((p1 == p2) && (p1 != 0.0D)) {
            this.series2.add(j, i);
          }
        }
      }
    }
  }
  
  private DecimalFormat df = new DecimalFormat("###.##");
  private int distribution = 0;
  private double xmin_1;
  private double ymin_1;
  private double xmin_2;
  private double ymin_2;
  private double xmax_1;
  private double ymax_1;
  private double xmax_2;
  private double ymax_2;
  XYSeries series1;
  XYSeries series2;
  XYSeries out_series1;
  XYSeries out_series2;
  List<Double> tmp_series1;
  List<Double> tmp_series2;
  Chart1 chart;
  Chart1 out_chart;
  ChartPanel inner_graph;
  ChartPanel outer_graph;
  private int k;
  private double m1_val1;
  private double m2_val1;
  private double s11_val1;
  private double s12_val1;
  private double s22_val1;
  private double m1_val2;
  private double m2_val2;
  private double s11_val2;
  private double s12_val2;
  private double s22_val2;
  private double s1Size = 0.0D;
  private double s2Size = 0.0D;
  XYPlot plot;
  
  private double prob1(double x, double y)
  {
    double ret = 0.0D;
    if (this.distribution == 0)
    {
      double sigmax = Math.sqrt(this.s22_val1);double sigmay = Math.sqrt(this.s11_val1);
      double rho = this.s12_val1 / (sigmax * sigmay);
      rho = 0.0D;
      ret = 1.0D / (6.283185307179586D * sigmax * sigmay * Math.sqrt(1.0D - rho * rho)) * Math.exp(-1.0D / (2.0D * (1.0D - rho * rho)) * (Math.pow(y - this.m1_val1, 2.0D) / this.s11_val1 + Math.pow(x - this.m2_val1, 2.0D) / this.s22_val1 - 2.0D * rho * (y - this.m1_val1) * (x - this.m2_val1) / (sigmax * sigmay)));
    }
    if (this.distribution == 1) {
      if ((x <= this.xmax_1) && (x >= this.xmin_1) && (y <= this.ymax_1) && (y >= this.ymin_1)) {
        ret = this.s1Size;
      }
    }
    return ret;
  }
  
  private double prob2(double x, double y)
  {
    double ret = 0.0D;
    if (this.distribution == 0)
    {
      double sigmax = Math.sqrt(this.s22_val2);double sigmay = Math.sqrt(this.s11_val2);
      double rho = this.s12_val2 / (sigmax * sigmay);
      rho = 0.0D;
      
      ret = 1.0D / (6.283185307179586D * sigmax * sigmay * Math.sqrt(1.0D - rho * rho)) * Math.exp(-1.0D / (2.0D * (1.0D - rho * rho)) * (Math.pow(y - this.m1_val2, 2.0D) / this.s11_val2 + Math.pow(x - this.m2_val2, 2.0D) / this.s22_val2 - 2.0D * rho * (y - this.m1_val2) * (x - this.m2_val2) / (sigmax * sigmay)));
    }
    if (this.distribution == 1) {
      if ((x <= this.xmax_2) && (x >= this.xmin_2) && (y <= this.ymax_2) && (y >= this.ymin_2)) {
        ret = this.s2Size;
      }
    }
    return ret;
  }
}

