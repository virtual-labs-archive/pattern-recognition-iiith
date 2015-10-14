package MyPackage;

import java.awt.Container;
import java.awt.Cursor;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.geom.Point2D;
import java.awt.geom.Rectangle2D;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.text.DecimalFormat;
import java.util.Vector;

import javax.accessibility.AccessibleContext;
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
import javax.swing.JToggleButton;
import javax.swing.LayoutStyle;
import javax.swing.LayoutStyle.ComponentPlacement;

import libsvm.svm;
import libsvm.svm_model;
import libsvm.svm_node;
import libsvm.svm_parameter;
import libsvm.svm_problem;

import org.jfree.chart.ChartMouseEvent;
import org.jfree.chart.ChartMouseListener;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.axis.ValueAxis;
import org.jfree.chart.plot.XYPlot;
import org.jfree.data.xy.XYDataItem;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;

public class Experiment4
  extends JApplet
{
  private JToggleButton add_class_1;
  private JComboBox class1_select;
  private JLabel classifier;
  private JButton clear_button;
  private JPanel controls;
  private JLabel currentClass;
  private JPanel graph;
  private JButton jButton1;
  private JButton jButton2;
  private JLabel jLabel1;
  private JLabel jLabel3;
  private JLabel jLabel5;
  private JPanel jPanel1;
  private JPanel jPanel2;
  private JButton load_class;
  private JPanel mark_points;
  private JButton reset_axes;
  private Chart1 chart;
  private ChartPanel innerGraph;
  private XYSeries testSeries;
  
  public void init()
  {
    try
    {
      EventQueue.invokeAndWait(new Runnable()
      {
        public void run()
        {
       Experiment4.this.initComponents();
        Experiment4.this.initGraph();
          for (String d : Experiment4.this.datasets) {
          Experiment4.this.class1_select.addItem(d);
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
    this.testSeries = new XYSeries("Test");
    for (int i = 0; i < 4; i++)
    {
      this.series[i] = new XYSeries("Class " + (i + 1));
      x1.addSeries(this.series[i]);
    }
    x1.addSeries(this.testSeries);
    this.chart = new Chart1(x1, "Y-axis", "X-axis");
    
    this.innerGraph = new ChartPanel(this.chart);
    this.innerGraph.addChartMouseListener(new ChartMouseListener()
    {
      public void chartMouseClicked(ChartMouseEvent e)
      {
        Point2D p = Experiment4.this.innerGraph.translateScreenToJava2D(e.getTrigger().getPoint());
        Rectangle2D plotArea = Experiment4.this.innerGraph.getScreenDataArea();
        XYPlot plot = (XYPlot)Experiment4.this.chart.getPlot();
        double chartX = plot.getDomainAxis().java2DToValue(p.getY(), plotArea, plot.getDomainAxisEdge());
        double chartY = plot.getRangeAxis().java2DToValue(p.getX(), plotArea, plot.getRangeAxisEdge());
        if (Experiment4.this.add_class_1.isSelected()) {
        Experiment4.this.testSeries.add(chartX, chartY);
        }
      }
      
      public void chartMouseMoved(ChartMouseEvent event) {}
    });
    this.graph.add(this.innerGraph);
  }
  
  public static void main(String[] args)
  {
  Experiment4 applet = new Experiment4();
    applet.init();
    JFrame frame = new JFrame("Pattern Recognition : Experiment 2 - Random Variables");
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
    this.clear_button = new JButton();
    this.jPanel1 = new JPanel();
    this.jLabel5 = new JLabel();
    this.class1_select = new JComboBox();
    this.load_class = new JButton();
    this.reset_axes = new JButton();
    this.jPanel2 = new JPanel();
    this.jButton1 = new JButton();
    this.jButton2 = new JButton();
    this.jLabel1 = new JLabel();
    this.classifier = new JLabel();
    this.jLabel3 = new JLabel();
    this.currentClass = new JLabel();
    
    this.graph.setMinimumSize(new Dimension(400, 400));
    this.graph.setPreferredSize(new Dimension(600, 600));
    this.graph.setLayout(new GridLayout(1, 0));
    getContentPane().add(this.graph, "Center");
    
    this.controls.setPreferredSize(new Dimension(400, 600));
    
    this.mark_points.setBorder(BorderFactory.createTitledBorder("Mark Points"));
    this.mark_points.setPreferredSize(new Dimension(218, 68));
    
    this.add_class_1.setText("Test Point");
    this.add_class_1.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
      Experiment4.this.add_class_1ActionPerformed(evt);
      }
    });
    this.clear_button.setText("Clear");
    this.clear_button.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
      Experiment4.this.clear_buttonActionPerformed(evt);
      }
    });
    GroupLayout mark_pointsLayout = new GroupLayout(this.mark_points);
    this.mark_points.setLayout(mark_pointsLayout);
    mark_pointsLayout.setHorizontalGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(mark_pointsLayout.createSequentialGroup().addContainerGap().addComponent(this.add_class_1).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addComponent(this.clear_button).addContainerGap(193, 32767)));
    
    mark_pointsLayout.setVerticalGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(mark_pointsLayout.createSequentialGroup().addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.add_class_1).addComponent(this.clear_button)).addContainerGap(-1, 32767)));
    
    this.jPanel1.setBorder(BorderFactory.createTitledBorder("Load Custom Datasets"));
    
    this.jLabel5.setText("Class 1");
    
    this.load_class.setText("Load");
    this.load_class.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
      Experiment4.this.load_classActionPerformed(evt);
      }
    });
    GroupLayout jPanel1Layout = new GroupLayout(this.jPanel1);
    this.jPanel1.setLayout(jPanel1Layout);
    jPanel1Layout.setHorizontalGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel1Layout.createSequentialGroup().addContainerGap().addComponent(this.jLabel5).addGap(18, 18, 18).addComponent(this.class1_select, -2, 143, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.load_class, -1, 73, 32767).addContainerGap()));
    
    jPanel1Layout.setVerticalGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel1Layout.createSequentialGroup().addGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel5).addComponent(this.class1_select, -2, -1, -2).addComponent(this.load_class)).addContainerGap(-1, 32767)));
    
    this.reset_axes.setText("Resize Axes");
    this.reset_axes.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
      Experiment4.this.reset_axesActionPerformed(evt);
      }
    });
    this.jPanel2.setBorder(BorderFactory.createTitledBorder("Classification DDAG"));
    this.jPanel2.setCursor(new Cursor(0));
    
    this.jButton1.setText("Start");
    this.jButton1.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
      Experiment4.this.jButton1ActionPerformed(evt);
      }
    });
    this.jButton2.setText("Next");
    this.jButton2.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
      Experiment4.this.jButton2ActionPerformed(evt);
      }
    });
    this.jLabel1.setText("Current Classifier :");
    
    this.classifier.setFont(new Font("DejaVu Sans", 1, 13));
    this.classifier.setText("jLabel2");
    
    this.jLabel3.setText("Current Class :");
    
    this.currentClass.setFont(new Font("DejaVu Sans", 1, 13));
    this.currentClass.setText("jLabel4");
    
    GroupLayout jPanel2Layout = new GroupLayout(this.jPanel2);
    this.jPanel2.setLayout(jPanel2Layout);
    jPanel2Layout.setHorizontalGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addContainerGap().addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.jButton1).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addComponent(this.jButton2)).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.jLabel1).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.classifier)).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.jLabel3).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.currentClass))).addContainerGap(149, 32767)));
    
    jPanel2Layout.setVerticalGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jButton1).addComponent(this.jButton2)).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel1).addComponent(this.classifier)).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel3).addComponent(this.currentClass)).addContainerGap(25, 32767)));
    
    this.classifier.getAccessibleContext().setAccessibleName("classifier");
    
    GroupLayout controlsLayout = new GroupLayout(this.controls);
    this.controls.setLayout(controlsLayout);
    controlsLayout.setHorizontalGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addContainerGap().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.TRAILING, false).addComponent(this.jPanel1, GroupLayout.Alignment.LEADING, -1, -1, 32767).addComponent(this.reset_axes, GroupLayout.Alignment.LEADING)).addContainerGap(66, 32767)).addGroup(GroupLayout.Alignment.TRAILING, controlsLayout.createSequentialGroup().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.TRAILING).addComponent(this.jPanel2, GroupLayout.Alignment.LEADING, -1, -1, 32767).addComponent(this.mark_points, -1, 349, 32767)).addGap(66, 66, 66)))));
    
    controlsLayout.setVerticalGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(GroupLayout.Alignment.TRAILING, controlsLayout.createSequentialGroup().addGap(29, 29, 29).addComponent(this.jPanel1, -2, -1, -2).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addComponent(this.mark_points, -2, -1, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.jPanel2, -2, -1, -2).addGap(328, 328, 328).addComponent(this.reset_axes).addGap(133, 133, 133)));
    
    this.mark_points.getAccessibleContext().setAccessibleName("Mark Test Points");
    
    getContentPane().add(this.controls, "East");
  }
  
  private void clear_buttonActionPerformed(ActionEvent evt)
  {
    XYPlot p = (XYPlot)this.chart.getPlot();
    p.clearAnnotations();
    this.testSeries.clear();
    
    this.add_class_1.setSelected(false);
  }
  
  private void add_class_1ActionPerformed(ActionEvent evt)
  {
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
  
  private void load_classActionPerformed(ActionEvent evt)
  {
    this.testSeries.clear();
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
          this.series[(Integer.parseInt(val[0]) - 1)].add(Double.parseDouble(val[1]), Double.parseDouble(val[2]));
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
  
  private void jButton1ActionPerformed(ActionEvent evt)
  {
    this.ddag_1 = 1;
    this.ddag_2 = this.series.length;
    this.classifier.setText(this.ddag_1 + " vs " + this.ddag_2);
    double x = classify(this.ddag_1 - 1, this.ddag_2 - 1);
    this.currentClass.setText("Not " + (x > 0.0D ? this.ddag_2 : this.ddag_1));
    if (x > 0.0D) {
      this.ddag_2 -= 1;
    } else {
      this.ddag_1 += 1;
    }
    this.jButton2.setEnabled(true);
  }
  
  private void jButton2ActionPerformed(ActionEvent evt)
  {
    this.classifier.setText(this.ddag_1 + " vs " + this.ddag_2);
    double x = classify(this.ddag_1 - 1, this.ddag_2 - 1);
    this.currentClass.setText("Not " + (x > 0.0D ? this.ddag_2 : this.ddag_1));
    if (x > 0.0D) {
      this.ddag_2 -= 1;
    } else {
      this.ddag_1 += 1;
    }
    if (this.ddag_1 == this.ddag_2)
    {
      this.jButton2.setEnabled(false);
      this.currentClass.setText("Classified as " + this.ddag_1);
    }
  }
  
  private XYSeries[] series = new XYSeries[4];
  private DecimalFormat df = new DecimalFormat("###.##");
  private String[] datasets = { "T1", "T2", "T3", "T4" };
  private String path = "/Data/";
  private int ddag_1;
  private int ddag_2;
  
  private double classify(int x1, int x2)
  {
    svm_parameter param = new svm_parameter();
    
    Vector<Double> vy = new Vector();
    Vector<svm_node[]> vx = new Vector();
    for (int i = 0; i < this.series[x1].getItemCount(); i++)
    {
      svm_node[] x = new svm_node[2];
      x[0] = new svm_node();
      x[0].index = 1;
      x[0].value = this.series[x1].getDataItem(i).getXValue();
      x[1] = new svm_node();
      x[1].index = 2;
      x[1].value = this.series[x1].getDataItem(i).getYValue();
      vx.add(x);
      vy.add(Double.valueOf(1.0D));
    }
    for (int i = 0; i < this.series[x2].getItemCount(); i++)
    {
      svm_node[] x = new svm_node[2];
      x[0] = new svm_node();
      x[0].index = 1;
      x[0].value = this.series[x2].getDataItem(i).getXValue();
      x[1] = new svm_node();
      x[1].index = 2;
      x[1].value = this.series[x2].getDataItem(i).getYValue();
      vx.add(x);
      vy.add(Double.valueOf(-1.0D));
    }
    param.svm_type = 0;
    param.kernel_type = 0;
    param.degree = 3;
    param.gamma = 0.0D;
    param.coef0 = 0.0D;
    param.nu = 0.5D;
    param.cache_size = 100.0D;
    param.C = 1.0D;
    param.eps = 0.001D;
    param.p = 0.1D;
    param.shrinking = 1;
    param.probability = 0;
    param.nr_weight = 0;
    param.weight_label = new int[0];
    param.weight = new double[0];
    
    svm_problem prob = new svm_problem();
    prob.l = vy.size();
    prob.x = new svm_node[prob.l][];
    for (int i = 0; i < prob.l; i++) {
      prob.x[i] = ((svm_node[])vx.elementAt(i));
    }
    prob.y = new double[prob.l];
    for (int i = 0; i < prob.l; i++) {
      prob.y[i] = ((Double)vy.elementAt(i)).doubleValue();
    }
    svm_model model = svm.svm_train(prob, param);
    int last = this.testSeries.getItemCount() - 1;
    svm_node[] testx = new svm_node[2];
    testx[0] = new svm_node();
    testx[0].index = 1;
    testx[0].value = this.testSeries.getDataItem(last).getXValue();
    testx[1] = new svm_node();
    testx[1].index = 2;
    testx[1].value = this.testSeries.getDataItem(last).getYValue();
    return svm.svm_predict(model, testx);
  }
}
